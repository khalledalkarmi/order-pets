<?php
require_once('../model/database.php');

$database = new Database();

$userId = $_POST['id'];

$result = $database->getOrderID($userId);



print_r(json_encode($result));
