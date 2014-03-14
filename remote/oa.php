<?php
$json = file_get_contents("http://openacc-web-01.uni.ds.port.ac.uk/dsign/oainfo.php");
header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
echo $json;
?>