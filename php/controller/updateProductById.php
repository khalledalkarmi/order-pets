<?php

require_once("../model/database.php");

$database = new Database();

$id = $_POST['id'];
$productName = $_POST['productName'];
$productDescription = $_POST['productDescription'];
$productCategory = $_POST['productCategory'];
$productDiscount = $_POST['productDiscount'];
$productQuantity = $_POST['productQuantity'];
$productPrice = $_POST['productPrice'];

$result = $database->updateProductTable(
    (int)$id,
    $productName,
    $productDescription,
    $productCategory,
    (int)$productQuantity,
    (float)$productPrice
);

print_r(json_encode($result));
