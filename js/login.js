$(document).ready(function(){
  $("#autocomplete_log").click(function(){
    var opc = $("#usr_to_log").val();

    switch (opc) {
      case "admin":
        $("#txlog_usuario").val("admincucei");
        $("#txlog_pasword").val("cucei");
        break;
      default:
        alert("paso algoraro :v");
    }
  });

  $("#btn_login").click(function(){
    var vusuario = $("#txlog_usuario").val();
    var vcontrasena = $("#txlog_pasword").val();

    $.ajax(
      {
        method : "POST",
        url : "php/login.php",
        data : {usuario: vusuario, contrasena: vcontrasena }
      })
      .done(function(msg)
      {
        if (msg == 1)
        {
          window.location.href="usuario.html";
        }

      });

  });

});
