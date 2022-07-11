//Scrivere un programma che prenda in input una sequenza di numeri, e quando l'utente inserisce -1 termini
//restituendo il valore piu` piccolo inserito
//E.S 
// Input : 1 9 19 9 1 9 0 -1
// Output : 0

let numeri = Number(prompt("Inserisci i numeri (Termina con -1)"));
let min : number = numeri + 1


while (numeri != -1){
    if (numeri<min){
        min = numeri;
    }
    numeri = Number(prompt("Inserisci numeri(Termina con -1"));
}

console.log (min);