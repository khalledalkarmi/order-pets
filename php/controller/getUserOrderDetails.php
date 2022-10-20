<?php

require_once('../model/database.php');

$database = new Database();

$userId = $_POST['userId'];

$result = $database->getUserOrderDetails($userId);

print_r(json_encode($result));