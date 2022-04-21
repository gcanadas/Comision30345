//Función para validar nombres
function validarNombre(nombre) {
    let ban;
    do{
        if (!nombreValido.test(nombre)) {
            alert ("No es un nombre válido");
            nombre = prompt ("Ingrese el nombre nuevamente");
            ban = true;
        }
        else{
            return nombre;
        }
    }while(ban);
}

//Función para ingresar nombres
function ingresarNombre() {
    let arregloNombres = [];
    //Ingreso los nombres hasta que se ingrese ESC
    for(let i=0; i < maximo; i++ ){
        let nombres = prompt("Ingrese el " + (i+1) + "° nombre. Para terminar la carga ingrese ESC.");
        nombres = validarNombre(nombres);
        if (nombres == "ESC"){
            return arregloNombres;
        }
        else{
        arregloNombres[i] = nombres;
        }
    }
}

//Función para validar números
function validarNumero(numero) {
    let ban;
    do{
        if (numero == "ESC"){
            return numero;
        } 
        else if (isNaN(numero)) {
            alert ("No se ingreso un número");
            numero = prompt ("Ingrese el número nuevamente");
            ban = true;
        }
        else{
            return numero;
        }
    }while(ban);
}

//Función para ingresar números
function ingresarNumero() {
    let arregloNumeros = [];
    //Ingreso los numeros hasta que se ingrese ESC
    for(let i=0; i < maximo; i++ ){
        let numeros = prompt("Ingrese el " + (i+1) + " número. Para terminar la carga ingrese ESC.");
        numeros = validarNumero(numeros);
        if (numeros == "ESC"){
            return arregloNumeros;
        }
        else{
        arregloNumeros[i] = numeros;
        }
    }
}
//Función para validar que los indices aleatorios no se repitan
function validarAleatorio(aleatorio, maximo, indice){ 
    while (true) {
        for(let i=0; i < indice; i++){
            if (aleatorio[indice] == aleatorio[i]){
                break;
            }
            else if (i == (indice - 1)){
                return aleatorio[indice];
            }
        }
        aleatorio[indice] = Math.floor((Math.random()*(maximo)));
    }
}

//Función para realizar sorteo
function sorteo(datos, cantGanadores) {
    let aleatorio = [];
    for(let i=0; i < cantGanadores; i++){
        aleatorio[i] = Math.floor((Math.random()*(datos.length))); //calcúlo un índice aleatorio.
        if(i >= 1){
            aleatorio[i] = validarAleatorio(aleatorio, datos.length, i);
        }
        alert ("El ganador número " + (i+1) + " es: " + datos[aleatorio[i]]);
        console.log(aleatorio[i]);
        console.log(datos[aleatorio[i]]);
    }
}
//-----------------------------------
//Programa Principal de la Aplicación
//-----------------------------------

//Definición de variables globales
const maximo = 1000;
const nombreValido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let cantGanadores = 0;
let tipo = 0;
let ban1;
let ban2;
let datos = [];

alert ("Bienvenido a la Aplicación de sorteos");

//Se ingresan la cantidad de ganadores
do{
    cantGanadores = parseInt(prompt("Ingrese la cantidad de ganadores (máximo 5)"));
    if (isNaN(cantGanadores)){
        alert ("La cantidad ingresada no es un número")
        ban1 = true;
    }
    else if ((cantGanadores <= 0) || (cantGanadores > 5)){
        alert ("La cantidad ingresada debe ser un número entre 1 y 5")
        ban1 = true;
    }
    else{
        ban1 = false;
    }
}while(ban1);

//Se determina si se van a sortear nombres o números
do{
    tipo = parseInt(prompt ("Si se desean sortear nombres presione 1. En el caso de números presione 2"));
    if ((tipo === 1) || (tipo === 2)){
        ban2 = false;
    }
    else{
        alert ("No se seleccionó una opción correcta");
        ban2 = true;
    }
}while(ban2);

//Se realizá el ingreso de datos según la elección previa
switch(tipo){
    case (1):
        datos = ingresarNombre();
        break;
    case (2):
        datos = ingresarNumero();
        break;
    default:
        alert ("ERROR. NO SE INGRESO NINGUNA OPCIÓN")
        break;
}

//Se sortean los ganadores y se los muestra
sorteo(datos, cantGanadores);
