<?php
include_once('../model/database.php');

$datbase = new Database();
$category = $_POST['ca'];

$result = $datbase->getProductByCategory($category);

print_r(json_encode($result));


?>