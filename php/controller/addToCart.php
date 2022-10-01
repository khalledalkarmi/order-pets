<?php

require_once("../model/database.php");

$database=new Database();

$userId=$_POST['user_id'];
$productId=$_POST['product_id'];
$quantity=$_POST['quantity'];

$result = $database->insertIntoCartItemsTable((int)$userId,(int)$productId,(int)$quantity);


print_r(json_encode($result));