<?php

header("Access-Control-Allow-Origin: *");

class conec{
function conexion(){
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "gestor";
    $puerto = 3306;

    $mysqli = new mysqli($host, $user, $pass, $db, $puerto);
    return $mysqli;
}

}
?>