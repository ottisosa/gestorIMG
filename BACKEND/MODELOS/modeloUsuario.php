<?php

require_once "../CONEXION/conexion.php";

class usuario
{

   function registrarUsuario($user, $pass)
    {
        $conexion = new conec;
        $conn = $conexion->conexion();
        $sql = "INSERT INTO usuario VALUES(0,'$user', '$pass');";
        $respuesta = $conn->query($sql);
        return $respuesta;
    }

    function loginUsuario($user, $pass)
    {
        $conexion = new conec;
        $conn = $conexion->conexion();
        $sql = "SELECT * FROM usuario WHERE user='$user' AND pass='$pass';";
        $respuesta = $conn->query($sql);
        $usuarios = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $usuarios;
    }
}