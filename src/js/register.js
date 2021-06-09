$('.submit').click(function(){
    let username = $('[name="username"]').val()
    let password = $('[name="password"]').val()
    let phone = $('[name="phone"]').val()
    let email = $('[name="email"]').val()
    let checked = $('[name="checkbox"]').prop('checked')
    // 依次校验数据
    // 验证数据不为空
    if(username === ''){
        layer.msg('用户名不能为空!',{
            icon:2,
            time:1500
        })
        return false;
    }
    // 用户名的规则：不能用数字开头，由字母和数字组成，4-10位
    var reg = /^[a-zA-Z][a-zA-Z0-9]{3,9}$/;
    if(!reg.test(username)){
        layer.msg('用户名的规则是：不能用数字开头,由字母和数字组成，4-10位!',{
            icon:2,
            time:1500
        })
        return false
    }
    if(password === ''){
        layer.msg('密码不能为空',{
            icon:2,
            time:1500
        })
        return false;
    }
    // 密码的规则：6-16位的任意字符
    var reg = /^.{6,16}$/;
    if(!reg.test(password)){
        layer.msg('密码不符合规则',{
            icon:2,
            time:1500
        })
        return false
    }
    if(phone === ''){
        layer.msg('电话不能为空',{
            icon:2,
            time:1500
        })
        return false;
    }
    // 手机号
    var reg = /^1[3-9]\d{9}$/;
    if(!reg.test(phone)){
        layer.msg('请输入正确的手机号',{
            icon:2,
            time:1500
        })  
        return false
    }
    if(email === ''){
        layer.msg('邮箱不能为空',{
            icon:2,
            time:1500
        })
        return false;
    }
    var reg = /(^[1-9]\d{4,10}@qq\.com$)|(^[a-zA-z]\w{3,11}@((126|163)\.com))|(yeah\.net)$/;
    if(!reg.test(email)){
        layer.msg('请输入正确的邮箱',{
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
        shade:[0.8,'#fff']
    })
    $(this).prop('disabled',true)
        
    $.post('./php/register.php',{
        username,
        password,
        phone,
        email
    },res=>{
        // console.log(res);
        let {meta:{status,msg},data} = res;
        layer.close(loadindex)
        if(status === 0){
            layer.msg(msg,{
                icon:1,
                time:1500
            },function(){
                tool.setCookie('username',username,7200)
            })
            setTimeout(function(){
                location.href = './login.html'
            },1000)
        }else{
            layer.msg(msg,{
                icon:2,
                time:1500
            })
            username.val = ''
            password.val = ''
            phone.val = ''
            email.val = ''
        }
        $('.submit').prop('disabled',false)
    },'json')
})