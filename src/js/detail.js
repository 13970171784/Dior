
// 定位标签
var dingbu = document.querySelector("#fixed");
window.onscroll = function(){
var t = document.documentElement.scrollTop || document.body.scrollTop
    // console.log(t);
    if(t>=60){
        dingbu.style.display = 'block';
    }else{
        dingbu.style.display = 'none';
    }
    
}
dingbu.onclick = function(){
var t = document.documentElement.scrollTop || document.body.scrollTop
    var top = setInterval(function(){
        if(t<0){
            clearInterval(top)
        }
        t -= 80;
        document.documentElement.scrollTop = document.body.scrollTop = t
    },20)
}


// 商品描述信息 显示隐藏
$('.four ol li h3').click(function(){
    $(this).siblings('div').css('display','block').parent().siblings().find('div').css('display','none')

    $(this).siblings('span').removeClass('icon-iconfontarrows1').addClass('icon-shangjiantou').parent().siblings()
    .find('span').removeClass('icon-shangjiantou').addClass('icon-iconfontarrows1')
    
})
  


let arr = /id=(\d+)/.exec(location.search)
// console.log(location.search);
// console.log(location.href);
// console.log(arr);
// 判断地址栏是否匹配到id
if(!arr){
    layer.msg('非法访问',{
        icon:2,
        time:1500,
    },function(){
        location.href = 'list.html'
    })
}
// console.log(arr);
let id = arr[1]
// 加载层
let loadindex = layer.load(2,{
    shade:[1,'#fff']
})
// 发送ajax获取图片信息
$.get('./php/detail.php',{id:id},res=>{
    // console.log(res);
    let {meta:{status,msg},data} = res;
    
    let {src,img1,img2,img3,img4,title,txt,number}=data
    if(status === 1){
        let str = '';
        str += `
        <p>#新品</p>
        <h2 class="title">${title}</h2>
        <p class="txt">${txt}</p>
        <span class="number">${number}</span>
    `

        let imgs = '';
        imgs += `
            <a href="javascript:;">
            <img src="${src}" alt="">
            </a>
            <li>
                <a href="javascript:;">
                    <img src="${img1}" alt="">
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="${img2}" alt="">
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="${img3}" alt="">
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="${img4}" alt="">
                </a>
            </li>
        `
        
        $('.con-r .one').html(str)
        $('.con-l ul').html(imgs)
        // 取消加载层
        layer.close(loadindex)
        // 添加购物车
        addcart()

    }
},'json')

// 定义一个加入购物车的函数
function addcart(){
    // console.log(data);
    $('.addcartBtn').click(function(){
        // 先判断用户是否登录
        // 获取cookie
        let username = tool.getCookie('username')
        if(!username){
            layer.msg('请先登录',{
                icon:2,
                time:1500
            },function(){
                // 先将当前地址存下来
                // 存在本地里，当判断跳转之前有地址保存，
                // login.js登录之后就跳回这个地址
                localStorage.setItem('url',location.href)
                location.href = 'login.html'
            })
        }else{
            // 已经登录 
            // 商品id / 用户名 / 数量
            // 多条数据存储的购物车数据格式应该是数组中包含多个对象
            // [{id:1,username,count:1},{id:1,username,count:1}]
            let obj = {
                goodsid:id,
                username:username,
                count:1
            }
            // console.log(obj);
            // 这里获取到了当前商品的数据,先存到本地

            // 将数据存到本地存储
            // 存先判断本地存储中是否有数据
            // 有数据就加一条，没有就新建一条
            var data = localStorage.getItem('data')
            if(!data){
                var arr = []
                arr.push(obj)
                var data = JSON.stringify(arr) // 本地存储的值必须是字符串，
                localStorage.setItem('data',data)
            }else{
                // 有数据
                // 将本地存储转为数组
                var arr = JSON.parse(data)

                // 先判断当前存储数据在本地中是否存储
                // 根据当前商品id和用户名在数组中查询是否有这条数据 
                var currentobj = arr.find(goods=>goods.goodsid === obj.goodsid && goods.username === obj.username)
                // console.log(currentobj);   // 找到了就返回数据，找不到就undefined
                if(currentobj){
                    // 存在，就让count++
                    currentobj.count++
                    localStorage.setItem('data',JSON.stringify(arr)) // 重新存储到本地数据
                    // console.log(arr);
                }else{
                    // 没有数据
                    arr.push(obj)
                    var data = JSON.stringify(arr)
                    localStorage.setItem('data',data)
                }
                
            }
            layer.msg('添加成功!',{
                time:1000,
                icon:1
            })
           
        }
    })
}
