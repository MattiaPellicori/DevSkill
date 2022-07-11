/*
Scrivere  un  programma  che,  letta  da  input  una  sequenza  di  interi  terminata  da  -1,  controlli  che  siano 
tutte cifre decimali (ovvero numeri compresi tra 0 e9), calcoli il numero che si ottiene giustapponendo le
cifre,  e  verifichi  se  il  numero  ottenuto  è  divisibile  per  3.  Più  in  dettaglio, l’output del programma deve 
rispettare le seguenti condizioni: 
1) Se uno dei valori inseriti da input non è una cifra decimale, deve essere stampata esclusivamente la
stringa ERRORE senza andare a capo e senza spaziature.
ESEMPIO: Se la sequenza in input fosse 2 5 9 15 1 -1 il programma dovrebbe stampare:
ERRORE
2) Se i valori inseriti sono tutte cifre decimali, deve essere inviato in stampa il numero che si ottiene 
giustapponendo le cifre e sulla riga successiva, la stringa SI (senza andare a capo e senza 
spaziature) se il numero è divisibile per 3, la stringa NO (senza andare a capo e senza spaziature), 
altrimenti.
ESEMPIO: Se la sequenza in input fosse 2 5 9 1 1 -1 il programma dovrebbe stampare:
25911 
SI 
ESEMPIO: Se la sequenza in input fosse 2 5 9 1 -1 il programma dovrebbe stampare: 
2591 
NO 
3) Se la sequenza in input è vuota, stampare esclusivamente la stringa VUOTO, senza andare
a capo e senza spaziature.
ESEMPIO: Se la sequenza in input fosse  -1 il programma dovrebbe stampare:
VUOTO
*/


let n =Number(prompt("Inserisci numeri lista(termina con -1)"));
let lista : number []=[];
let numero : string = "";
let b : boolean = true;

while(n != -1){
    lista.push(n);
    n = Number(prompt("Inserisci un numero(termina con -1)"));
}

for (let i = 0; i<lista.length; i++){
    if (lista[i]>=0 && lista[i] <9){
        numero += lista[i];

    } else {
        b = false;
        break
    }
}

if (b){
    if(numero == ""){
        console.log ("Vuoto");

    }else if (Number(numero)%3==0){
        console.log (numero)
        console.log ("SI")

    }else {
        console.log (numero)
        console.log ("NO")
    }
}else console.log ("ERRORE") 