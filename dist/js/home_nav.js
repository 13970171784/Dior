"use strict";$("nav ul>li").hover(function(){$(this).addClass("active").find("ol").css("display","block")},function(){var i=this;setTimeout(function(){$(i).removeClass("active").find("ol").css("display","none")},100)});var $last=$(".ulis ul").last().clone();$(".ulis").append($(".ulis ul").first().clone()),$(".ulis").prepend($last),$(".ulis").css({width:$last.width()*$(".ulis ul").length+"px",left:-$last.width()+"px"});var index_nav=1;$("a.rightBtn2").click(function(){index_nav++,$(".ulis").stop().animate({left:-index_nav*$last.width()},"2000","swing",function(){index_nav===$(".ulis ul").length-1&&(index_nav=1,$(".ulis").css("left",-index_nav*$last.width()+"px")),console.log(index_nav,$(".ulis ul").length),$(".olis li").eq(index_nav-1).addClass("active").siblings().removeClass("active")})}),$("a.leftBtn2").click(function(){index_nav--,$(".ulis").stop().animate({left:-index_nav*$last.width()},"2000",function(){0===index_nav&&(index_nav=$(".ulis ul").length-2,$(".ulis").css("left",-index_nav*$last.width()+"px")),$(".olis li").eq(index_nav-1).addClass("active").siblings().removeClass("active")})}),$(".olis li").click(function(){index_nav=$(this).index()+1,$(".ulis").stop().animate({left:-index_nav*$last.width()},"2000",function(){0===index_nav&&(index_nav=$(".ulis ul").length-2,$(".ulis").css("left",-index_nav*$last.width()+"px")),$(".olis li").eq(index_nav-1).addClass("active").siblings().removeClass("active")})});var timerId2=setInterval(function(){index_nav++,$(".ulis").stop().animate({left:-index_nav*$last.width()},"2000",function(){index_nav===$(".ulis ul").length-1&&(index_nav=1,$(".ulis").css("left",-index_nav*$last.width()+"px")),$(".olis li").eq(index_nav-1).addClass("active").siblings().removeClass("active")})},5e3);$(".ulis").hover(function(){clearInterval(timerId2)},function(){timerId2=setInterval(function(){index_nav++,$(".ulis").stop().animate({left:-index_nav*$last.width()},"2000",function(){index_nav===$(".ulis ul").length-1&&(index_nav=1,$(".ulis").css("left",-index_nav*$last.width()+"px")),$(".olis li").eq(index_nav-1).addClass("active").siblings().removeClass("active")})},5e3)});