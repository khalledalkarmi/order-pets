<?php
include_once('../model/database.php');

$database = new Database();

$userId = $_POST['id'];
$price = 10 ;
$paid = "No";

$result = $database->insertOrderInSubscriptionTable($userId, $price, $paid);

print_r(json_encode($result));




?>