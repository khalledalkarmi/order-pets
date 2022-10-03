<?php

require_once("../model/database.php");

$database = new Database();

$id=$_POST['id'];

$result = $database->getById((int)$id,'user_address');

print_r(json_encode($result));