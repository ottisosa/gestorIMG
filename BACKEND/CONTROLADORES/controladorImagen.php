<?php
require_once "../MODELOS/modeloImagen.php";


$funcion = $_GET['funcion'];


switch ($funcion) {

    case "verImagen":

        verIMG();

        break;

    case "cargarImagen":

        cargarIMG();
        break;
}



function verIMG()
{
    $imagenes = (new imagen())->verImg();
    echo json_encode($imagenes);

}


function cargarIMG()
{
    $nombre = $_POST ['nombre'];
    $imagen = $_FILES ['imagen'];
   $resultado = (new imagen())->cargarImg($nombre,$imagen);
   echo json_encode($resultado);

}














?>