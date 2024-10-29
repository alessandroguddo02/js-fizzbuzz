/**Consegna:*
Scrivi un programma che stampi i numeri da 1 a 100,

ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

*Consigli del giorno:*
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"*/




"use strict";
console.clear()
//creazione variabile totale numeri
let tNumber = 100

//creare ciclo che coinvolga multipli
for (let i = 1; i <= tNumber; i++) {
    if (i % 5 === 0 && i % 3 === 0) //multipli in comune
        console.log("FizzBuzz")
    else if(i % 5 === 0) //multipli di 5
        console.log("Buzz")
    else if(i % 3 === 0) //multipli di 3
        console.log("Fizz")
    else
        console.log(i + ' ' + "non è divisibile per i numeri indicati") //non divisibili
}