<?php
ini_set('display_errors', 0);
require "../config.php";
$pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUser, $dbPassword);
