<?php

require_once('../model/database.php');

$database = new Database();
$id =$_POST['id'];

$result = $database->deleteData($id,'users');

print_r(json_encode($result));
