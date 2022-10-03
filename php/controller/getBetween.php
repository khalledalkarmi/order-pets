<?php

require_once ('../model/database.php');

$database = new Database();

$price1 = $_POST['price1'];
$price2 = $_POST['price2'];

$reslut = $database->getProductByBetweenPrice($price1, $price2);

print_r(json_encode($reslut));


?>