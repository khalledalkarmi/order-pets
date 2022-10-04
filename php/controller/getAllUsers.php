<?php

require_once("../model/database.php");

$database = new Database();

$result = $database->getByTable('users');

print_r(json_encode($result));