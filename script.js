
// inizializzo la variabile "somma" = 0 per poterla impostare come numero ed impiegare successivamente nel ciclo for
/* var somma = 0;


// Inizio ciclo for il quale si ripeterá per tot volte quanto saranno i numeri da sommare e fare media
for (i=1 ; i<= 10 ; i++) {

    //calcoliamo la somma
    somma = somma + i ;
    //console.log(somma);


    //calcoliamo la media
    media = somma / 10 ;
    //console.log(media);

}
console.log(somma);
console.log(media);
*/

//Metodo di immissione "dinamico"

var somma = 0;
var n = parseInt(prompt("scrivi un numero"));

// Inizio ciclo for il quale si ripeterá per tot volte quanto saranno i numeri da sommare e fare media
for (i=1 ; i<= n ; i++) {

    //calcoliamo la somma
    somma = somma + i ;
    //console.log(somma);


    //calcoliamo la media
    media = somma / n ;
    //console.log(media);

}
console.log(somma);
console.log(media);
