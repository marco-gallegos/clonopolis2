<?php
session_start();
$user = $_SESSION["usuario"];
$pass = $_SESSION["contrasena"];
if ($pass == "" or $user == "")
{
  $res = json_encode("estado : 'no user o pas'");
  echo $res;
  die();
}
$datos = "{";

$num = 1;
foreach ($_POST as $key ) {
  if($key == ""){
    $res = json_encode("estado : 'dato no enviado'");
    echo $res;
    die();
  }
  $datos .= $num . " : " . $key . ",";
  $num ++;
}
$datos .= "estado : todo bien }";
$res = json_encode($datos);


echo $res;

 ?>
