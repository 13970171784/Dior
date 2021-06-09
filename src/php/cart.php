<?php
header("content-type:text/html;charset=utf8");
$ids = $_GET['ids'];    // 2,3,1
$con = mysqli_connect('localhost','root','root','2102');  
mysqli_query($con,'set names utf8');
$res = mysqli_query($con,"select * from detail where id in ($ids)");
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
            "msg"=>"数据获取失败"
        ],
        "data"=>null
    ]);
}
