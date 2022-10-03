<?php

require_once('../model/database.php');

$database = new Database();

$user_id =$_POST['userId'];
$product_id =$_POST['productId'];

$result = $database->deleteItemFromCart($user_id,$product_id);

print_r(json_encode($result));
