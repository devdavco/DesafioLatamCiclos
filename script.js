//Crea una función llamada contarHasta que reciba un número como parámetro y que muestre en consola los números del 1 al número ingresado.

/* Escribe tu código aquí */
function contarHasta(numero){
   let i = 1;
    while(i<=numero){
        console.log(i)
        i++;
    }
}

/* Fin */


contarHasta(4)
contarHasta(12)


//El siguiente es un ejercicio de intuición y lógica. Sí necesitaramos ahora crear un función que partiera desde un número distinto a 1, ¿Qué cambio harías en el codígo?

//Crea una función llamada desdeHasta que reciba 2 parámetros, desde y hasta. Muestra en consola todos los números entre medio.

/* Escribe tu código aquí */

function desdeHasta(desde,hasta){

    while(desde <= hasta){
        console.log(desde)
        desde ++;
    }
}


/* Fin */

desdeHasta(4, 9);
