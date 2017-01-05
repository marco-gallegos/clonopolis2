function cargar_vista_en_container(url)
{
  $.ajax(
    {
      url : url,
      dataType : "html",
      error : function(){
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
    if (this.id.match()) {
      
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
        response[0].forEach(function(element,index,array){
          $("#"+(index+1)).val(element);
        });
      });
  });

});
