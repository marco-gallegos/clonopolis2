<?php
// la logica es : si el usuario existe en el SGBD puede usar el sistema
//por tanto el usuario debe ser adinistrado desde el SG
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

try {
    $conexion = new PDO('mysql:host=localhost;dbname=clonopolis', $usuario, $contrasena);
    $conexion = null;

    echo 1;
    //si el sistema no crashea devolvemos 1 como señal de que se conecto
} catch (PDOException $e) {
    //si no conecta o hay error se devuelve 0 y se cierra
    echo 0;
    die();
}

session_start();

$_SESSION["usuario"]=$usuario;

$_SESSION["contrasena"]=$contrasena;

 ?>
