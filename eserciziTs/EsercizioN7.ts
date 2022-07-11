/*
Scrivere un programma che, letti da input in quest’ordine un intero X, un intero N e una sequenza di N 
interi, stampi tutti i numeri pari strettamente minori di X presenti all’interno della sequenza.  
ATTENZIONE:  Si  noti  che  affinché  il  programma  possa  essere  gestito  dal  valutatore  automatico, 
devono essere inviati in stampa solo ed esclusivamente i numeri che rispettano la condizione richiesta, 
senza  andare  a  capo  e  senza aggiungere spazi  o  altre  stampe  (neppure  quelle  che  possono 
accompagnare l'istruzione input per comunicare a chi esegue il programma che dati inserire).  
ESEMPI: 
- Se X fosse 10, N fosse 7 e la sequenza di numeri fosse 12 32 15 2 4 9 18,  il programma dovrebbe  
stampare 24 poiché 2 e 4 sono gli unici numeri pari nella sequenza minori di 10. Si noti come 
non siano presenti spazi a separare i numeri stampati.
- Se X fosse 0, N fosse 8 e la sequenza di numeri fosse 14 12 32 15 2 4 9 18, il programma non dovrebbe 
stampare nulla poichè tutti i numeri pari nella sequenza sono maggiori di 0. 
- Se X fosse 30, N fosse 4 e la sequenza di numeri fosse 15 1 15 3,  il programma non dovrebbe 
stampare nulla poichè non ci sono numeri pari nella sequenza */


let x =Number(prompt("Inserisci x"));
let n =Number(prompt("Inserisci n"));
let lista :number [] = [];
let str: string = "";

for (let i = 0; i < n; i++){
    let n =Number(prompt("Inserisci numero nella lista"));
    lista.push(n);
}
console.log (lista)

for (let i = 0; i<lista.length ; i++){
    if (lista[i]%2 == 0 && lista[i] < x){
        str += lista[i];

    }
}
if (x != 0){
    if (str != ""){
        console.log (str);
    }
}