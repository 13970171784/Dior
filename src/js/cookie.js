function getCookie(key){
    var arr = document.cookie.split('; ')
    for(var i=0;i<arr.length;i++){
        var brr = arr[i].split('=')
        if(brr[0] === key){
            return brr[1]
        }
    }
}
// 设置cookie的函数
function sCookie(key,value,seconds,path='/'){
    var date = new Date()
    var time = date.getTime()-8*3600*1000+seconds*1000
    date.setTime(time)
    document.cookie = key+'='+value+';expires='+date+";path="+path;
}
// 删除cookie的函数
function removeCookie(key,path="/"){
    sCookie(key,null,-1,path)
}