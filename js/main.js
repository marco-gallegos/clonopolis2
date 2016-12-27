function cargar_vista_en_container(url)
{
  $.ajax(
    {
      url : url,
      dataType : "html",
      error : function()
      {
        console.log("error de ejecucion");
      }
    }).done(function(response){
      $(".container").empty();
      $(".container").append(response);
    });
}

$(document).ready(function(){

  $(".cargar-vista").click(function(event){
    event.preventDefault();
    var dir_pagina = "vista/" + this.id + ".html";
    cargar_vista_en_container(dir_pagina);
  });

  //para insertar
  $(".container").on("click",".btn-insert",function(){
    var datos = {};
    //var direccion = "php/insert/" + this.id + ".php";
    var direccion = "php/insert/" + "insert-pelicula.php";

    var fr = document.forms[0].elements;
    for (var i = 1; i <= fr.length; i++)
    {
      var nu = "#"+i;
      var elem = $(nu).val();
      //console.log(elem + nu);
      datos[i] = elem;
    }
    datos["tabla"] = $("#nom_tabla").text().toLowerCase();

    $.ajax(
      {
        method : "POST",
        url : direccion,
        data : datos,
        dataType : "json",
        error:function(bad_response){
          $("#status_box").text("error ----> " + bad_response);
        }}).done(function(response){
          $("#status_box").text(response);
        });

  });

});
