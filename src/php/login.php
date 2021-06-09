<?php
header("content-type:text/html;charset=utf8");
$username = $_POST['username'];
$password = $_POST['password'];
$con = mysqli_connect('localhost','root','root','2102');
mysqli_query($con,'set names utf8');
$res = mysqli_query($con,"select * from user where username='$username'");
$row = mysqli_fetch_Assoc($res);
// $les = mysqli_query($con,"select * from user where username='$username'");
// $low = mysqli_fetch_Assoc($les);
// if($low){
//     $res = mysqli_query($con,"select * from user where username='$username' and password='$password'");
//     $row = mysqli_fetch_Assoc($res);
//     if($row){
//         // 如找到了 数据，判断密码是否正确
//         if($row['password'] === $password){
//             $arr = [
//                 "meta"=>[
//                     "status"=>1,
//                     "msg"=>"登录成功"
//                 ],
//                 "data"=>null
//             ];
//         }elseif(!$row['password'] === $password){
//             $arr = [
//                 "meta"=>[
//                     "status"=>2,
//                     "msg"=>"登录失败,密码错误"
//                    ],
//                 "data"=>null
//             ];
//         }
//     }
// }else{
//     // 没有找到用户名
//     $arr = [
//         "meta"=>[
//             "status"=>0,
//             "msg"=>"用户名不存在"
//         ],
//         "data"=>null
//     ];
// }
// echo json_encode($arr);

    



if($row){
    // 如找到了 数据，判断密码是否正确
    if($row['password'] === $password){
        $arr = [
            "meta"=>[
                "status"=>1,
                "msg"=>"登录成功!"
            ],
            "data"=>null
        ];
    }else{
        $arr = [
            "meta"=>[
                "status"=>2,
                "msg"=>"登录失败,用户名或密码错误!"
            ],
            "data"=>null
        ];
    }
}else{
    // 没有找到用户名
    $arr = [
        "meta"=>[
            "status"=>0,
            "msg"=>"用户名不存在!"
        ],
        "data"=>null
    ];
}
echo json_encode($arr);