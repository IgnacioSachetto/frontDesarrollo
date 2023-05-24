//Para definir una variable vamos a utilizar let
let texto:string = "Un texto";
let numero:number = 10;
let verdadero:boolean = true;
let cualquiera:any = "Cualquier Valor"; //Puedo guardar cualquiera tipo de variable

verdadero = false;

//Para definir constantes

const nombre:string = "Nacho";
console.log("Hola 20.36");

let personas:string[]  = ["Matias", "Sebastian", "Agostina", "Nacho"];
console.log(personas);

let div_personas:HTMLElement = document.querySelector("#personas");

div_personas.innerHTML = "<ul>" +
    personas.map((persona:string) => {
       return "<li>"+persona + "</li>";
    }).join("") +
"</ul>";


