// 登录注册 导航 显示隐藏
$('.person').click(function(){
    $('.lore').css('display','block')
})
$('.close button').click(function(){
    $('.lore').css('display','none')
})


// 显示用户名
var username = tool.getCookie('username');
if(username){
    var str = ` <h2>欢迎,${username}</h2>
    <a href="cart.html">查看购物车</a>
    <br>
    <br>
    <a href="javascript:;" class="logout">退出</a>
       
    `
    $('.changeShow').html(str)

    $('.logout').click(function(){
        layer.confirm('你确定要退出吗?',{
            btn:['退出','取消']
        },function(){
            layer.msg('退出成功',{
                icon:1,
                time:1500
            },function(){
                tool.removeCookie('username');
                var str = `
                <div class="log">
                    <h2>登录</h2>
                    <p>登录我的账户</p>
                    <a href="login.html">登录</a>
                </div>
                <div class="reg">
                    <h2>没有账户吗?</h2>
                    <a href="register.html">建立账户</a>
                </div>
                `
                $('.changeShow').html(str)
            });
        })
        return false
    })
}else{
    // 没有登录
    layer.msg('请先登录',{
        icon:2,
        time:1500
    },function(){
        localStorage.setItem('url',location.href)
        setTimeout(function(){
            location.href = 'login.html'
        },1000)
    })
}

// 列表加载层
var loadindex2 = layer.load(1,{
    shade:[1,'#fff']
})


// 获取数据
var data = localStorage.getItem('data')
// console.log(data);
// if(tool.getCookie('username')!=undefined){

if(!data || data==='[]'){
    let str = `
        <div class="sub">
            <h2>购物袋为空<h2>
            <p>您的购物袋内没有物品</p>   
            <p>点击<a href="list.html"> 这里 </a>来继续购物</p>  
        </div> 
    `
    $('.con-l').html(str)
    layer.close(loadindex2)
}else{
    // 将数据转数组
    let arr = JSON.parse(data)
    // 将当前用户的商品筛选出来
    let currentArr = arr.filter(goods=>goods.username === username)
    // 判断用户的购物车是否为空
    if(!currentArr.length){
        let str = `
            <div class="sub">
                <h2>购物袋为空<h2>
                <p>您的购物袋内没有物品</p>   
                <p>点击<a href="list.html">这里</a>来继续购物</p>  
            </div> 
        `
        $('.con-l').html(str)
    }
    // 这时候的数组是当前用户的数据，要获取这几个数据的商品id，所以要先把id拿出来然后组成一个数组，然后传递给php    -  ["2","3","1"]
    // 使用map方法，将数组中的所有goodsid获取到
    let idsArr = currentArr.map(goods=>goods.goodsid)
    // 再将所有商品的id做成字符串
    let idsStr = idsArr.join(',')   // [2,3,1]
    // console.log(idsStr);
    // 根据这个id到数据库中查找所有商品的其他信息

    
    $.get('php/cart.php',{ids:idsStr},res=>{
        // console.log(res);
        let {meta:{status,msg},data} = res
        if(status===1){
            // console.log(data);
            // console.log(currentArr);
            // 遍历id,让上面两个的id关联，然后把currentArr中商品的数量放进data数组中
            // 也就是将本地存储的数量，放到请求回来的数据中
            data.forEach(goods=>{
                currentArr.forEach(currentGoods=>{
                    if(goods.id === currentGoods.goodsid){
                        goods.count = currentGoods.count
                    }
                })
            })
            // console.log(data);
            // 遍历数据，渲染页面
            let str = `
                <ul>
                    <li><a href="#"  class="active">购物袋</a></li>
                    <li><a href="#">订单提交</a></li>
                    <li><a href="#">支付</a></li>
                </ul>
                <h2>迪奥时装</h2>
                <h3>* 国家药监局提示您：请正确认识化妆品功效，化妆品不能替代药品, 不能治疗皮肤病等疾病</h3>
            `
            data.forEach(goods=>{
                str += `
                <form action="">
                    <table class="table">
                        
                        <tr>
                            <td><input type="checkbox" checked name="selectOne" /></td>
                            <td class="tu"><img src="${goods.src}" alt="克丽丝汀迪奥"></td>
                            <td class="text">
                                <h3>${goods.title}</h3>
                                <p>￥<span>${goods.price}<span></p>
                                <a>${goods.txt}</a>
                            </td>
                            <td class="number">
                                <input type="button" class="del" value="-">
                                <span class="totalNumber">${goods.count}</span>
                                <input type="button" class="add" value="+">
                            </td>
                            <td class="money">￥ <span>${goods.price * goods.count}</span></td>
                            <td class="cha">X</td>
                            <td data-id="${goods.id}" class="msg">+编辑刻字信息</td>
                        </tr>
                    </table>
                </form>
                `
            })
            str += `
                <tr>
                    <td><input type="checkbox" checked name="selectAll"/></td>
                    <td>全选</td>
                </tr>
                <tr class="last">    
                    <td>总金额: ￥ <span class="allPrice">0</span> </td>
                </tr>
                <tr class="qingkong">    
                    <td><input type="button" class="clearCart" value="清空购物袋" name="_clear"></td>
                </tr>
            `
            $('.con-l').html(str)
            $('[name="_clear"]').css({
                float: 'right',
                'background-color':' #000 ',
                color: '#fff',
                height: '30px',
                padding: '0 10px',
                'border-radius': '15px',
                'font-size': '12px',
                'margin-top':'10px',
                'border':'none'
            })
            // 购物车功能
            // 全选功能
            selectAll()
            // 单选
            selectOne()
            // 数量加
            add()
            // 减
            del()
            // 小计
            sumPrice()
            // 计算商品总数量和总价格
            total()
            // 删除购物车
            delCart()
            // 清空购物车
            clearCart()
            layer.close(loadindex2)
        }
    },'json')
    
}

// }
 // 全选功能
 function selectAll(){
    $('[name="selectAll"]').click(function(){
        $('[name="selectOne"]').prop('checked',$(this).prop('checked'))
        total()
    })
 }
// 单选
 function selectOne(){
    $('[name="selectOne"]').click(function(){
        // 将所有单选(伪数组)转成数组
        var arr = Array.prototype.slice.call($('[name="selectOne"]'))
        // console.log(arr);
        // 用every方法判断
        var bool = arr.every(checkbox=>checkbox.checked)
        // console.log(bool);
        // 设置全选
        $('[name="selectAll"]').prop('checked',bool)
        total()
 })
}
// 数量加
function add(){
    $('.add').click(function(){
        var count = $(this).prev().text()-0
        count++
        if(count>=10){
            count = 10
        }
        // console.log(count);
        $(this).prev().text(count)
        // 将数量放到本地存储中
        var data = localStorage.getItem('data')
        var arr = JSON.parse(data)
        // 获取当前商品的id
        var currentId = $(this).parent().siblings().last().attr('data-id')
        // console.log(currentId);
        // // 从数组中找到当前商品的那个对象
        var obj = arr.find(goods=>goods.goodsid === currentId)
        // 操作数量
        obj.count = count
        // 存进去
        localStorage.setItem('data',JSON.stringify(arr))
        sumPrice()
        total()
    })
}
// 数量减
function del(){
    $('.del').click(function(){
        var count = $(this).next().text()-0
        count--
        if(count<=1){
            count = 1
        }
        // console.log(count);
        $(this).next().text(count)
        // 将数量放到本地存储中
        var data = localStorage.getItem('data')
        var arr = JSON.parse(data)
        // 获取当前商品的id
        var currentId = $(this).parent().siblings().last().attr('data-id')
        // console.log(currentId);
        // // 从数组中找到当前商品的那个对象
        var obj = arr.find(goods=>goods.goodsid === currentId)
        // 操作数量
        obj.count = count
        // 存进去
        localStorage.setItem('data',JSON.stringify(arr))
        sumPrice()
        total()
    })
}
// 计算小计
function sumPrice(){
    $('.totalNumber').each(function(i,countInput){
        let count = $(countInput).text()
        // console.log(count);
        let price = $(countInput).parent().prev().find('p span').text()
        let sum = count * price
        // console.log(sum);
        $(countInput).parent().next().find('span').text(sum)
    })
}
// 计算商品总数量和总价格
function total(){
    var allNumber = 0
    var allPrice = 0
    // :checked所有选中的复选框   :select所有选中的option
    $('[name="selectOne"]:checked').each(function(i,checkbox){
        let number = $(checkbox).parent().siblings('.number').find('span').text()-0
        allNumber += number
        // console.log(allNumber);
        let price = $(checkbox).parent().siblings('.money').find('span').text()-0
        allPrice += price
        // console.log(allPrice);
        $('.allPrice').text(allPrice)
    })
}
// 删除
function delCart(){
    $('.cha').click(function(){
        layer.confirm('您确定要删除吗?',{
            btn:['确定','取消']
        },()=>{
            $(this).parent().parent().remove()
            // 将商品从本地存储中删除
            // 获取
            var data = localStorage.getItem('data')
            var arr = JSON.parse(data)
            // 获取当前商品的id
            var currentId = $(this).parent().next().attr('data-id')
            // console.log(currentId); 
            // // 从数组中找到当前商品的那个对象对应的下标
            var index = arr.findIndex(goods=>goods.goodsid === currentId)
            // 删除
            arr.splice(index,1)
            // 重新存
            localStorage.setItem('data',JSON.stringify(arr))
            total()
            layer.msg('删除成功!',{
                time:1000,
                icon:1
            })
            let currentArr = arr.filter(goods=>goods.username === username)
            // 判断用户的购物车是否为空
            // 每次删除都要再判断下有没有数据
            if(!currentArr.length){
                let str = `
                    <div class="sub">
                        <h2>购物袋为空<h2>
                        <p>您的购物袋内没有物品</p>   
                        <p>点击<a href="list.html">这里</a>来继续购物</p>  
                    </div> 
                `
                $('.con-l').html(str)
            }
        })
    })
}
// 清空购物车
function clearCart(){
    $('.clearCart').click(function(){
        layer.confirm('您确定要清空购物袋吗?',{
            btn:['确定','取消']
        },function(){
            // 将本地存储中的数据删除
            var data = localStorage.getItem('data')
            var arr = JSON.parse(data)
            // 从arr中将不属于当前用的的数据筛选出来，重新存
            var brr = arr.filter(goods=>goods.username !== username)
            localStorage.setItem('data',JSON.stringify(brr))
            let str = `
            <div class="sub">
                <h2>购物袋为空<h2>
                <p>您的购物袋内没有物品</p>   
                <p>点击<a href="list.html">这里</a>来继续购物</p>  
            </div> 
            `
            $('.con-l').html(str)
            layer.msg('删除成功!',{
                time:1000,
                icon:1
            })
        })
    })
}






