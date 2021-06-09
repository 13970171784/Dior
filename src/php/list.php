<?php
header("content-type:text/html;charset=utf8");
$con = mysqli_connect('localhost','root','root','2102');
mysqli_query($con,'set names utf8');
// $res = mysqli_query($con,"select * from list");
$res = mysqli_query($con,"select * from summer_man");
$arr = [];
while($row = mysqli_fetch_assoc($res)){
    $arr[] = $row;
}
if(count($arr)>0){
    echo json_encode([
        "meta"=>[
            "status"=>1,
            "msg"=>"数据获取成功"
        ],
        "data"=>$arr
    ]);
}else{
    echo json_encode([
        "meta"=>[
            "status"=>0,
            "msg"=>"数据获取成功"
        ],
        "data"=>null
    ]);
}