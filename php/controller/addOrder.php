<?php

require_once("../model/database.php");

$database=new Database();

$userId=$_POST['userId'];
$cartId=$_POST['cartId'];
$quantity=$_POST['quantityNum'];

$result = $database->insertIntoOrderItemsTable( (int)$userId,(int)$cartId,(int)$quantity);


print_r(json_encode($result));