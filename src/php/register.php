<?php
header("content-type:text/html;charset=utf8");
$username = $_POST["username"];
$password = $_POST["password"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$con = mysqli_connect('localhost','root','root','2102');
mysqli_query($con,'set names utf8');
$res = mysqli_query($con,"select * from user where username='$username'");
$row = mysqli_fetch_assoc($res);
if($row){
    $arr = [
        "meta"=>[
            "status"=>1,
            "msg"=>"用户名已存在"
        ],
        "data"=>null
    ];
}else{
    $res = mysqli_query($con,"insert user(username,password,email,phone) values('$username','$password','$email',$phone)");
    if($res){
        $arr = [
            "meta"=>[
                "status"=>0,
                "msg"=>"注册成功"
            ],
            "data"=>null
        ];
    }else{
        $arr = [
            "meta"=>[
                "status"=>2,
                "msg"=>"注册失败"
            ],
            "data"=>null
        ];
    }
}
echo json_encode($arr);