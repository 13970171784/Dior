// 底部 定位标签
var dingbu = document.querySelector("#fixed");
window.onscroll = function(){
var t = document.documentElement.scrollTop || document.body.scrollTop
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
    },10)
}


// 列表加载层
let loadindex = layer.load(1,{
    shade:[1,'#fff']
})
//发送ajax请求列表页数据
$.get('./php/list.php',res=>{
    // console.log(res);
    let {meta:{status,msg},data} = res; 
    // console.log(data);
    if(status===1){
        // var arr = data
        // var arr = data.slice((page-1)*4,page*4)
        // var str = `
        // <li class="col-lg-3 col-md-4 col-sm-6">
        //     <a href="javascript:;">
        //         <img src="https://www.dior.cn/couture/var/dior/storage/images/pushs-editos/folder-fall21-men/folder-beach-capsule/3sa081yxvh961/23998024-1-eng-GB/3sa081yxvh961_1440_1200.jpg" alt="">
        //     </a>
        // </li>
        // `;
        //     data.forEach(data => {
        //     str += `
        //         <li class="col-lg-3 col-md-4 col-sm-6">
        //             <a href="detail.html?id=${data.id}">
        //                 <img src="${data.src}" alt="">
        //                 <p class="p">#新品</p>
        //                 <h2 class="h2">${data.title}</h2>
        //                 <h3 class="h3">${data.txt}</h3>
        //                 <b class="b">${data.price}</b>
        //                 <i class="iconfont addcart">&#xe666;</i>
        //                 <i class="iconfont icon-aixin"></i>
        //             </a>
        //         </li>
        //     `
        //     })
        //     $('.ol').html(str)
            // 分页
            $(".myPagination").Pagination({
                page:1,
                count:data.length,
                limit:6,
                onPageChange:function(page){
                    var arr = data.slice((page-1)*4,page*4)
                    var str = `
                    <li class="col-lg-3 col-md-4 col-sm-6">
                        <a href="javascript:;">
                            <img src="https://www.dior.cn/couture/var/dior/storage/images/pushs-editos/folder-fall21-men/folder-beach-capsule/3sa081yxvh961/23998024-1-eng-GB/3sa081yxvh961_1440_1200.jpg" alt="">
                        </a>
                    </li>
                    `;
                    arr.forEach(data => {
                    str += `
                        <li class="col-lg-3 col-md-4 col-sm-6">
                            <a href="detail.html?id=${data.id}">
                                <img src="${data.src}" alt="">
                                <p class="p">#新品</p>
                                <h2 class="h2">${data.title}</h2>
                                <h3 class="h3">${data.txt}</h3>
                                <b class="b">${data.price}</b>
                                <i class="iconfont addcart">&#xe666;</i>
                                <i class="iconfont icon-aixin"></i>
                            </a>
                        </li>
                    `
                    })
                    $('.ol').html(str)
                }
            })
        // $('.ol').html(str)
        layer.close(loadindex)
    }else{
        location.href = 'home.html'
    }
},'json')

