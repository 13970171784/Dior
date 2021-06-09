$('nav ul>li').hover(function(){
    $(this).addClass('active').find('ol').css('display','block')
},function(){
    setTimeout(()=>{        
        $(this).removeClass('active').find('ol').css('display','none')
    },100)
})


// 列表切换
// $('.list main ol li').click(function(){
//     $(this).addClass('active').siblings().removeClass('active')
//     .parent().prev().children().eq($(this).index()).addClass('active')
//     .siblings().removeClass('active')
// })


var $last = $('.ulis ul').last().clone()
$('.ulis').append( $('.ulis ul').first().clone() )
$('.ulis').prepend($last)
$('.ulis').css({
    width:$last.width() * $('.ulis ul').length + 'px',
    left:-$last.width() + 'px'
})
// 轮播 右击
var index_nav = 1;
$('a.rightBtn2').click(function(){

    index_nav++;
    $('.ulis').stop().animate({
        left:-index_nav * $last.width()
    },'2000','swing',function(){
        if(index_nav===$('.ulis ul').length-1){
            index_nav = 1
            $('.ulis').css('left',-index_nav * $last.width() + 'px')
        }
        console.log(index_nav,$('.ulis ul').length)
        $('.olis li').eq(index_nav-1).addClass('active').siblings().removeClass('active')
    })
})

$('a.leftBtn2').click(function(){

    index_nav--;
    $('.ulis').stop().animate({
        left:-index_nav * $last.width()
    },'2000',function(){
        if(index_nav===0){
            index_nav = $('.ulis ul').length-2
            $('.ulis').css('left',-index_nav * $last.width() + 'px')
        }
        $('.olis li').eq(index_nav-1).addClass('active').siblings().removeClass('active')
    })
})
$('.olis li').click(function(){
    index_nav = $(this).index()+1
    $('.ulis').stop().animate({
        left:-index_nav * $last.width()
    },'2000',function(){
        if(index_nav===0){
            index_nav = $('.ulis ul').length-2
            $('.ulis').css('left',-index_nav * $last.width() + 'px')
        }
        $('.olis li').eq(index_nav-1).addClass('active').siblings().removeClass('active')
    })
})
var timerId2 = setInterval(function(){
    index_nav++;
    $('.ulis').stop().animate({
        left:-index_nav * $last.width()
    },'2000',function(){
        if(index_nav===$('.ulis ul').length-1){
            index_nav = 1
            $('.ulis').css('left',-index_nav * $last.width() + 'px')
        }
        $('.olis li').eq(index_nav-1).addClass('active').siblings().removeClass('active')
    })
},5000)

$('.ulis').hover(function(){
    clearInterval(timerId2)
},function(){
    timerId2 = setInterval(function(){
        index_nav++;
        $('.ulis').stop().animate({
            left:-index_nav * $last.width()
        },'2000',function(){
            if(index_nav===$('.ulis ul').length-1){
                index_nav = 1
                $('.ulis').css('left',-index_nav * $last.width() + 'px')
            }
            $('.olis li').eq(index_nav-1).addClass('active').siblings().removeClass('active')
        })
    },5000)
})