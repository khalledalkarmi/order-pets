<?php

require_once("../model/database.php");

$database = new Database();

$productId = $_POST['id'];

$result = $database->getById((int)$productId,'product');

print_r(json_encode($result));
