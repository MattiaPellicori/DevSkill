/*
Scrivere  un  programma  che,  letta  da  input  una  sequenza  di  interi  terminata  da  un  tappo  pari  a  0 
(ZERO), stampi SI se la sequenza ha un andamento strettamente crescente fino ad un certo punto e un 
andamento strettamente decrescente dal quel punto in poi; stampi NO altrimenti. 
ATTENZIONE:  Stampare  solo  una  delle  stringhe  SI/NO  senza  aggiungere  altre  spaziature  o  andare  a 
capo. 
ESEMPI 
- Se la sequenza in input fosse 
0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
3 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
1 3 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
3 1 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
1 2 4 3 2 0 
Il programma dovrebbe stampare SI. 
- Se la sequenza in input fosse 
-1 2 1 1 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
-1 -1 2 1 0 
Il programma dovrebbe stampare NO. 
- Se la sequenza in input fosse 
-1 2 25 23 13 9 7 2 1 -1 0 
Il programma dovrebbe stampare SI. 
- Se la sequenza in input fosse 
-1 2 25 2 23 13 9 7 2 1 -1 0 
Il programma dovrebbe stampare NO. */

let n = Number(prompt("Inserisci un numero(termina con 0)"));
let lista:number [] = [];
let crescente:boolean = false;
let decrescente:boolean = false;
let x:number = 0;

while(n != 0){
    lista.push(n);
    n = Number(prompt("Inserisci un numero(termina con 0)"));
}
console.log (lista);

for (let i = 0; i<lista.length; i++){
    if(lista[i]<lista[i+1]){
        crescente = true;
    
    } else {
        x = i;
        break;
    }
}
if (crescente){
    for (x; x<lista.length-1; x++){
        if(lista[x]>lista[x+1]){
            decrescente = true;
        } else {
        decrescente = false;
        console.log ("No");
        break;
        }
    }
} else {
    console.log ("No");
}

if (decrescente){
    console.log ("Si");
}
