$(document).ready(function() {

    var nombre = localStorage.getItem("nombre")
    var cedula = localStorage.getItem("cedula")

    $("#nombre_perfil").html(nombre)
    $("#cedula_perfil").html(cedula)

});