<?php
session_start();
$user = $_SESSION["usuario"];
$pass = $_SESSION["contrasena"];
if ($pass == "" or $user == "")
{
  $res = json_encode("{ estado : no user o pas }");
  echo $res;
  die();
}
try {
  $conn = new PDO('mysql:host=localhost;dbname=clonopolis', $user, $pass);

  $sql = $conn->prepare("UPDATE peliculas SET nombre = :2, duracion = :3, clasificacion = :4, fecha_estreno = :5, idioma = :6, genero = :7, sinopsis = :8 WHERE id = :1");

  $sql->execute(array(':1' => $_POST[1], ':2' => $_POST[2], ':3' => $_POST[3], ':4' => $_POST[4], ':5' => $_POST[5], ':6' => $_POST[6], ':7' => $_POST[7], ':8' => $_POST[8]));

} catch (PDOException $e) {
  $res = json_encode("{estado : ".$e.getMessage()."}");
  echo $res;
}
$res = json_encode("{estado : todo bien}");
echo $res;

 ?>
