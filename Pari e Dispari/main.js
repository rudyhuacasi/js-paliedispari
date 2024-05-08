`use strict`

// definisco una variabile per inserire un numero per il utente
const numeri = Number(prompt(`Inserici un numero da 1 a 5`));
console.log(`il numero di utente è`,numeri);

// aggiungo una function
computer(a= numeri)

// impostare una function
function computer(a=numeri) {
    // definisco una variabile per generare un numero randomico per il computer
    const random = Math.floor(Math.random()*5+1)
    console.log(`il numero di computer è`,random);

    // definisco una variabile per la somma di numeri + random
    const somma = a + random
    console.log(somma);

    // aggiungo una condizionale per i numeri pari e dispari
    if (somma % 2 === 0) {
        console.log(`${somma} è un numero pari`);
    } else {
        console.log(`${somma} è un numero dispari`);
    }
    // aggiungo una condizionale per scegliere il vincitore
    if (a > random) {
        console.log(`il utente ha vinto`);
    }else if (a < random) {
        console.log(`il computer ha vinto`);
    }else if( a===random){
        console.log(`Nessuno ha vinto`);
    }
}



