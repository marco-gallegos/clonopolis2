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

foreach ($_POST as $key ) {
  if($key == ""){
    $res = json_encode("estado : 'dato no enviado'");
    echo $res;
    die();
  }
}

try {
  $conn = new PDO('mysql:host=localhost;dbname=clonopolis', $user, $pass);

  //version anterior de executar
  //$sql = $conn->prepare("INSERT INTO peliculas SET nombre = :1, duracion = :2, clasificacion = :3, fecha_estreno = :4, idioma = :5, genero = :6, sinopsis = :7");

  $sql = $conn->prepare("INSERT INTO peliculas SET nombre = ?, duracion = ?, clasificacion = ?, fecha_estreno = ?, idioma = ?, genero = ?, sinopsis = ?");

  //version anterior
  //$sql->execute(array(':1' => $_POST[2], ':2' => $_POST[3], ':3' => $_POST[4], ':4' => $_POST[5], ':5' => $_POST[6], ':6' => $_POST[7], ':7' => $_POST[8]));

  $sql->execute(array($_POST[2], $_POST[3], $_POST[4], $_POST[5], $_POST[6], $_POST[7], $_POST[8]));

  $res = json_encode("estado : 'todo bien'");

} catch (Exception $e) {
  $res = json_encode("{estado : ".$e.getMessage()."}");
  echo $res;
}



echo $res;

 ?>
