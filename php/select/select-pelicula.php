<?php
session_start();
$user = $_SESSION["usuario"];
$pass = $_SESSION["contrasena"];
if ($pass == "" or $user == "")
{
  /*old
  $res = json_encode("{ estado : 'no user o pas' }");
  echo $res;
  */
  $res = json_encode(array('estado' => 'no user o pas' ));
  exit($res);
}
if ($_POST["todos"] == 1) {
  $query = "SELECT * FROM peliculas";
  try {
    $conn = new PDO('mysql:host=localhost;dbname=clonopolis', $user, $pass);
    $sql = $conn->prepare($query);
    $sql->execute();
    $row = $sql->fetchAll(PDO::FETCH_NUM);

  } catch (PDOException $e) {
    $res = json_encode(array('estado' => $e.getMessage()));
    echo $res;
    die();
  }
}
else {
  $query = "SELECT * FROM peliculas WHERE id = :1";
  try {
    $conn = new PDO('mysql:host=localhost;dbname=clonopolis', $user, $pass);
    $sql = $conn->prepare($query);
    $sql->execute(array(':1' => $_POST[1]));
    $row = $sql->fetchAll(PDO::FETCH_NUM);

  } catch (PDOException $e) {
    $res = json_encode(array('estado' => $e.getMessage()));
    echo $res;
    die();
  }
}

$res = json_encode($row);
echo $res;

 ?>
