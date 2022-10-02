<?php

require_once('../model/database.php');

$database = new Database();

$userId = $_POST['userId'];
$result = $database->getAllProductById((int)$userId,'cart_item');

print_r(json_encode($result));
