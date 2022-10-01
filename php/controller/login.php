<?php

require_once("../model/database.php");

$database = new Database();

$email=$_POST['email'];
$password=$_POST['password'];

$result = $database->checkPasswordToEmail($email,$password);

print_r(json_encode($result));

