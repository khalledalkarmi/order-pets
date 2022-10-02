<?php

require_once("../model/database.php");

$database=new Database();

$userId=$_POST['userId'];
$productId=$_POST['productId'];
$quantity=$_POST['quantity'];

$result = $database->insertIntoCartItemsTable((int)$userId,(int)$productId,(int)$quantity);


print_r(json_encode($result));