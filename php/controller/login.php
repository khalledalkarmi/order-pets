<?php

require_once("../model/database.php");

$database = new Database();
 // get data from post request 
$email=$_POST['email'];
$password=$_POST['password'];

$result = $database->checkPasswordToEmail($email,$password);

// response 
print_r(json_encode($result));

