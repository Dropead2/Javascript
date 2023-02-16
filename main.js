let opcionCancha = prompt("1. Cancha: Bernabeu \n\n2. Cancha: Atanasio \n\n3. Cancha: Centenario");

switch (opcionCancha) {
    case "1" : {

        let cancha1 = "Bernabeu"
        let aforo1 = "20"

        if (cancha1 == false) {

        } else {
            document.write(`La cancha ${cancha1} no se encuentra disponible. Esta tiene un aforo maximo de ${aforo1} personas.`); break;
        }

    }

    case "2" : {

        let cancha2 = "Atanasio"
        let aforo2 = "14"

        if (cancha2 == true) {

        } else {
            document.write(`La cancha ${cancha2} se encuentra disponible. Esta tiene un aforo maximo de ${aforo2} personas`); break;
        }

    }

    case "3" : {

        let cancha3 = "Centenario"
        let aforo3 = "8"

        if (cancha3 == false) {

        } else {
            document.write(`La cancha ${cancha3} se encuentra ocupada. Esta tiene un aforo maximo de ${aforo3} personas`); break;
        }

    }
}



