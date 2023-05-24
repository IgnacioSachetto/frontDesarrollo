//Para definir una variable vamos a utilizar let
var texto = "Un texto";
var numero = 10;
var verdadero = true;
var cualquiera = "Cualquier Valor"; //Puedo guardar cualquiera tipo de variable
verdadero = false;
//Para definir constantes
var nombre = "Nacho";
console.log("Hola 20.36");
var personas = ["Matias", "Sebastian", "Agostina", "Nacho"];
console.log(personas);
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
    personas.map(function (persona) {
        return "<li>" + persona + "</li>";
    }).join("") +
    "</ul>";
