/*
    Ejercicio #1: Uso del switch
    Fecha: 15/02/2023

    Este ejercicio nos muestra como usar un switch
    dando como ejemplo 3 canchas de futbol, las cuales
    selecionando una de ellas nos dira si esta disponible
    u ocupada mostrando su aforo maximo de personas
*/

let opcionCancha = prompt("1. Cancha: Bernabeu \n\n2. Cancha: Atanasio \n\n3. Cancha: Centenario");

switch (opcionCancha) {
    case "1" : {

        let cancha1 = "Bernabeu"
        let aforo1 = "20"

        if (cancha1 === false) {

        } else {
            document.write(`La cancha ${cancha1} no se encuentra disponible. Esta tiene un aforo maximo de ${aforo1} personas.`);
        }

    } break;

    case "2" : {

        let cancha2 = "Atanasio"
        let aforo2 = "14"

        if (cancha2 === true) {

        } else {
            document.write(`La cancha ${cancha2} se encuentra disponible. Esta tiene un aforo maximo de ${aforo2} personas`); break;
        }

    } break;

    case "3" : {

        let cancha3 = "Centenario"
        let aforo3 = "8"

        if (cancha3 === false) {

        } else {
            document.write(`La cancha ${cancha3} se encuentra ocupada. Esta tiene un aforo maximo de ${aforo3} personas`); break;
        }

    } break;

    default: {
        alert("No has seleccionado ninguna cancha");
    } break;
}


/*
    Ejercicio #2: Uso del while
    Fecha: 15/02/2023

    Este ejercicio nos muestra como usar un while
    dando como ejemplo un contador que se aumenta
    cada vez que se ejecuta el codigo
*/

let contador = 0;

while (contador < 10) {
    document.write(`El contador es: ${contador} <br>`);
    contador++;
}

// Path: main.js
/*
    Ejercicio #3: Uso del for
    Fecha: 15/02/2023

    Este ejercicio nos muestra como usar un for
    dando como ejemplo un contador que se aumenta
    cada vez que se ejecuta el codigo
*/

for (let i = 0; i < 10; i++) {
    document.write(`El contador es: ${i} <br>` );
}

// Path: main.js
/*
    Ejercicio #4: Uso del do while
    Fecha: 15/02/2023

    Este ejercicio nos muestra como usar un do while
    dando como ejemplo un contador que se aumenta
    cada vez que se ejecuta el codigo
*/

let contador1 = 0;

do {
    document.write(`El contador es: ${contador1} <br>`);
    contador1++;
} while (contador1 < 10);


/*
    Ejercicio #5: Uso del for in
    Fecha: 15/02/2023

    Este ejercicio nos muestra como usar un for in
    dando como ejemplo un objeto que se recorre
    mostrando sus datos
*/

var persona = {
    Nombre: "Maicol",
    Apellido: "Montoya",
    Edad: 25
}

for (let x in persona) {
    document.write(`${x}: ${persona[x]} <br>`);
}

/*
    Ejercicio #6: Uso del for of
    Fecha: 15/02/2023

    Este ejercicio nos muestra como usar un for of
    dando como ejemplo un array que se recorre
    mostrando sus datos
*/

let array = ["Hola", " Mundo", "!", " ¿", "Como", " Estas", "?"];

for (let x of array) {
    document.write(`${x}`);
}




