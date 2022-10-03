<?php
require_once("../model/database.php");

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$registerEmail = $_POST['registerEmail'];
$registerPassword = $_POST['registerPassword'];
$registerRepeatPassword = $_POST['registerRepeatPassword'];
$mobile = $_POST['mobile'];
$address1 = $_POST['address1'];
$address2 = $_POST['address2'];
$city = $_POST['city'];
$country = $_POST['country'];
$postal = $_POST['postal'];

$database = new Database();
$database->insertIntoUserTable($registerEmail,$registerPassword,$firstName,$lastName,$mobile,'user');
$userId= $database->getUserIdByEmail($registerEmail);
$result = $database->insertIntoUserAddressTable($userId,$address1,$address2,$city,$postal,$country,$mobile);

print_r(json_encode($result));
