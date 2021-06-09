var banner = document.querySelector('.banner');
var ul = banner.querySelector('ul')
var ol = banner.querySelector('ol')
var leftBtn = banner.querySelector('a.leftBtn')
var rightBtn = banner.querySelector('a.rightBtn')
var ImgStop = banner.querySelector('ol span')

var firstLi = ul.children[0].cloneNode(true)
var lastLi = ul.lastElementChild.cloneNode(true)
ul.appendChild(firstLi)
ul.insertBefore(lastLi,ul.children[0])

var flag = true

var index = 1
ul.style.left = -index * ul.children[0].offsetWidth + 'px'
ul.style.width = firstLi.offsetWidth * ul.children.length + 'px'
 function move(){
    tool.animate(ul,{
        left: -index * ul.children[0].offsetWidth
    },function(){
        if(index === ul.children.length-1){
            index = 1
        }
        ul.style.left = -index * ul.children[0].offsetWidth + 'px'

        for(var i=0;i<ol.children.length;i++){
            if(ol.children[i].nodeName==="SPAN"){
                
            }else{
                ol.children[i].className = ''
            }
        }
        ol.children[index-1].className = 'active'

        flag = true
    })
 }
rightBtn.onclick = function(){
    if(!flag){
        return false
    }
    flag = false

    index++
    
    move();
}


leftBtn.onclick = function(){
    if(!flag){
        return false
    }
    flag = false

    index--

    tool.animate(ul,{
        left: -index * ul.children[0].offsetWidth
    },function(){
        if(index === 0){
            index = ul.children.length-2
        }
        ul.style.left = -index * ul.children[0].offsetWidth + 'px'

        for(var i=0;i<ol.children.length;i++){
            if(ol.children[i].nodeName==="SPAN"){
                
            }else{
                ol.children[i].className = ''
            }
        }
        ol.children[index-1].className = 'active'

        flag = true
    })

    
    
}


for(let i = 0;i<ol.children.length;i++){
    ol.children[i].onclick = function(){
    if(!flag){
        return false
    }
    flag = false

    index = i+1

    move();
    }
}


var timerId = setInterval(function(){
    if(!flag){
        return false
    }
    flag = false

    index++
    move();
},5000)

ImgStop.onclick = function(){  
    if(this.className==='iconfont icon-zanting'){
        
        clearInterval(timerId)
        // console.log(timerId);
        this.className = 'iconfont icon-sanjiaoxing';
    }
    else if(this.className==='iconfont icon-sanjiaoxing'){
        clearInterval(timerId)
        // console.log(this);
        this.className = 'iconfont icon-zanting';
        timerId = setInterval(function(){
            if(!flag){
                return false
            }
            flag = false
        
            index++
            move();
        },5000)
    }  
}



// 定位标签
var dingbu = document.querySelector("#fixed");
window.onscroll = function(){
var t = document.documentElement.scrollTop || document.body.scrollTop
    console.log(t);
    if(t>=60){
        dingbu.style.display = 'block';
    }else{
        dingbu.style.display = 'none';
    }
    
}
dingbu.onclick = function(){
var t = document.documentElement.scrollTop || document.body.scrollTop
    var top = setInterval(function(){
        if(t<=0){
            clearInterval(top)
        }
        t -= 80;
        document.documentElement.scrollTop = document.body.scrollTop = t
    },10)
}



// 登录注册 导航
$('.person').click(function(){
    $('.lore').css('display','block')
})
$('.close button').click(function(){
    $('.lore').css('display','none')
})


