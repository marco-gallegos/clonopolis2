<?php
session_start();
$user = $_SESSION["usuario"];
$pass = $_SESSION["contrasena"];
if ($pass == "" or $user == "")
{
  $res = json_encode("{ estado : 'no user o pas' }");
  echo $res;
  die();
}
try {
  $conn = new PDO('mysql:host=localhost;dbname=clonopolis', $user, $pass);

  $sql = $conn->prepare("SELECT * FROM peliculas WHERE id = :1");

  $sql->execute(array(':1' => $_POST[1]));

  $row = $sql->fetchAll(PDO::FETCH_NUM);

} catch (PDOException $e) {
  $res = json_encode("{estado : ".$e.getMessage()."}");
  echo $res;
}
$res = json_encode($row);
echo $res;

 ?>
