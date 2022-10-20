<?php

require_once("../model/database.php");

$database=new Database();

$userId=$_POST['userId'];
$orderItemId=$_POST['orderItemId'];
$total=$_POST['total'];
$status=$_POST['status'];

$result = $database->insertIntoOrderDetailsTable( $userId, $orderItemId, $total, $status);


print_r(json_encode($result));


