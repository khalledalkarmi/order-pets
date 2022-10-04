<?php

require_once('../model/database.php');

$database = new Database();
$id =$_POST['id'];

$result = $database->deleteData($id,'product');

print_r(json_encode($result));
