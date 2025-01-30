<?php

require_once "../MODELOS/modeloUsuario.php";

$funcion = $_GET['funcion'];

switch ($funcion) {

    case "login":

        login();

        break;

    case "registro":

        registro();

        break;
};


function login()
{

    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $resultado = (new usuario())->loginUsuario($user, $pass);
    echo json_encode($resultado);
};


function registro()
{

    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $resultado = (new usuario())->registrarUsuario($user, $pass);
    echo json_encode($resultado);
};
