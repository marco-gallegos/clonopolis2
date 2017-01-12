function cargar_vista_en_container(url)
{
  $.ajax(
    {
      url : url,
      dataType : "html"
    }).done(function(response){
      $(".container").empty();
      $(".container").append(response);
  });
}

$(document).ready(function(){

  $("#logoff").click(function(event){
    event.preventDefault();
    $.post("php/logoff.php").done(function(response){
      console.log("sesion terminada ");
    });
  });

  $(".cargar-vista").click(function(event){
    event.preventDefault();
    var dir_pagina = "vista/" + this.id + ".html";
    cargar_vista_en_container(dir_pagina);
  });

  //para insertar
  $(".container").on("click",".btn-insert , .btn-update",function(){
    var datos = {};
    if(this.id.match("update[-]?[a-z]*")){
      var direccion = "php/update/" + this.id + ".php";
      console.log("update");
    }
    else{
      var direccion = "php/insert/" + this.id + ".php";
    }
    var fr = document.forms[0].elements;
    for (var i = 1; i <= fr.length; i++)
    {
      var nu = "#"+i;
      var elem = $(nu).val();
      //console.log(elem + nu);
      datos[i] = elem;
    }
    //datos["tabla"] = $("#nom_tabla").text().toLowerCase();
    $.ajax({
        method : "POST",
        url : direccion,
        data : datos,
        dataType : "json",
        error:function(bad_response){
          $("#status_box").text("error ----> " + bad_response);
        }
    }).done(function(response){
      $("#status_box").text(response);
      });
  });

  $(".container").on("click",".btn-buscar, .btn-buscar-all",function(){
    var direccion = "php/select/" + this.id + ".php";
    var datos = {};
    if (this.classList.contains("btn-buscar-all")) {
      direccion = "php/select/select-pelicula.php";
      datos["todos"] = 1;
    }
    datos[1] = $("#1").val();
    $.ajax(
      {
        method : "POST",
        url : direccion,
        data : datos,
        dataType : "json",
        error:function(bad_response){
          $("#status_box").text("error ----> " + bad_response);
        }
      }
    ).done(function(response){
      switch (response.estado) {
        case "no user o pas" :
          return;
          break;
        default:

      }
      if (response.length > 1) {
        $(".table").empty();
        var estructura_tabla = '<thead><tr class="info"><td>id</td><td>nombre</td><td>duracion</td><td>clasificacion</td><td>fecha estreno</td><td>idioma</td><td>genero</td><td>sinopsis</td></tr></thead> <tbody>';
        $(".tabla_resultados").append(estructura_tabla);
        for (var i = 0; i < response.length; i++) {

          var res = "<tr>";
          var count = Object.keys(response[i]).length;
          for (var j = 0; j < count; j++) {
            res += "<td> " + response[i][j] + "</td>";
          }
          res += "</tr>";
          //console.log(res);
          $(".tabla_resultados").append(res);
        }
        $(".tabla_resultados").append("</tbody>");

      }else {
        response[0].forEach(function(element,index,array){
          $("#"+(index+1)).val(element);
        });
      }
    });
  });

});
