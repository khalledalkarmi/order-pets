<?php

require_once("../model/database.php");

$database = new Database();

$productName = $_POST['productName'];
$productDescription = $_POST['productDescription'];
$productCategory = $_POST['productCategory'];
$productDiscount = $_POST['productDiscount'];
$productQuantity = $_POST['productQuantity'];
$productPrice = $_POST['productPrice'];
$productImage1 = $_POST['productImage1'];
$productImage2 = $_POST['productImage2'];
$productImage3 = $_POST['productImage3'];


$result = $database->insertIntoProductTable($productName,$productDescription,$productCategory,
(int)$productQuantity,(float)$productPrice
,$productImage1,$productImage2,$productImage3);

print_r(json_encode($result));