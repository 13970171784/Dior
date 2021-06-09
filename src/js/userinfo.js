// 显示用户名
var username = tool.getCookie('username');
if(username){
    var str = `
        <h2>欢迎,${username}</h2>
        <a href="cart.html">查看购物车</a>
        <br>
        <br>
        <a href="#" class="logout">退出</a>
    `
    $('.changeShow').html(str)

    $('.logout').click(function(){
        layer.confirm('你确定要退出吗?',{
            btn:['退出','取消']
        },function(){
            layer.msg('退出成功',{
                icon:1,
                time:1000
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
}