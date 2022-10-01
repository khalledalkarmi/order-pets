<?php

require_once("../model/database.php");

$database = new Database();

$result = $database->getByTable('product');

print_r(json_encode($result));