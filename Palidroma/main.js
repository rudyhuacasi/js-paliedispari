`use strict`

//definisco una variabile per inserire una parola
const parole = prompt(`Inserire una parola`)
console.log(parole);

// aggiungo una function
palindroma()

// impostando una function
function palindroma() {
    
    // definisco una variabile per staccare ogni lettera
    const caratteri = parole.split('');
    console.log(caratteri);

    // definisco un variabile per mettere in contrario e dopo unire quelle lettere
    const invertita = caratteri.reverse().join(``);
    console.log(invertita);
    
    //aggiungo una condizionale per la parola palindroma e no palindroma
    if (parole === invertita) {
        console.log( `${parole}  è una parola palindroma.`);
    } else {
        console.log( `${parole}  non è una parola palindroma.`);
    }
}

