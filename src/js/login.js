// 判断是否有记住的用户名


$('.submit').click(function(){
    let username = $('[name="username"]').val()
    let password = $('[name="password"]').val()
    let checked = $('[name="checkbox"]').prop('checked')
    // 验证数据不为空
    if(username === ''){
        layer.msg('用户名不能为空',{
            icon:2,
            time:1500
        })
        return false;
    }
    if(password === ''){
        layer.msg('密码不能为空',{
            icon:2,
            time:1500
        })
        return false;
    }
    if(checked === false){
        // alert('请勾选协议')
        layer.msg('请勾选协议',{
            icon:7,
            time:1500
        })
        return false
    }
    var loadindex = layer.load(1,{
        shade:[0.8,'#fff'] // 透明度的背景
    })
    // 将登录按钮禁用
    $(this).prop('disabled',true)

    // 发送ajax
    $.post('./php/login.php',{
        username,
        password
    },res=>{
        // console.log(res);
        let {meta:{status,msg},data} = res;
        layer.close(loadindex) // 请求回来后关闭透明背景
        if(status === 1){
            layer.msg(msg,{
                icon:1,
                time:1500
            },function (){
                // 设置 存储cookie
                tool.setCookie('username',username,7200)
                // 判断是否被迫登录的
                // 在到本地中获取存储路径，有就跳回那个地址,没有就跳回首页
                let url = localStorage.getItem('url')
                if(url){
                    localStorage.removeItem('url')  // 跳转之前就删除url，不然每次都是这个地址
                    location.href = url
                }else{
                    localStorage.setItem('url',location.href)
                    setTimeout(function(){
                        location.href = './home.html'
                    },500)
                }
            })
        }else{
            layer.msg(msg,{
                icon:2,
                time:1500
            })
        }
        $('.submit').prop('disabled',false)
    },'json')
})