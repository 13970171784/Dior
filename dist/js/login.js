"use strict";$(".submit").click(function(){var r=$('[name="username"]').val(),e=$('[name="password"]').val(),o=$('[name="checkbox"]').prop("checked");if(""===r)return layer.msg("用户名不能为空",{icon:2,time:1500}),!1;if(""===e)return layer.msg("密码不能为空",{icon:2,time:1500}),!1;if(!1===o)return layer.msg("请勾选协议",{icon:7,time:1500}),!1;var i=layer.load(1,{shade:[.8,"#fff"]});$(this).prop("disabled",!0),$.post("./php/login.php",{username:r,password:e},function(e){var o=e.meta,a=o.status,t=o.msg;e.data;layer.close(i),1===a?layer.msg(t,{icon:1,time:1500},function(){tool.setCookie("username",r,7200);var e=localStorage.getItem("url");e?(localStorage.removeItem("url"),location.href=e):(localStorage.setItem("url",location.href),setTimeout(function(){location.href="./home.html"},500))}):layer.msg(t,{icon:2,time:1500}),$(".submit").prop("disabled",!1)},"json")});