/*
Prendere in input una sequenza di numeri terminata da -1 e stampare a schermo la lunghezza della sequenza ripetuta piu` lunga.
Una sequenza e` la successione di numeri uguali e consecutiva senza interruzioni di almeno lunghezza 2
Se esistono piu` sequenze con lo stesso valore, stampare la prima di esse
Es.
Input: 0 1 3 4 5 5 5 8 4 3 2 1 1 1 0 9 3 2 1 9 9 -1
Output : 9 con lunghezza 5
Input: 0 1 3 4 5 8 4 3 2 1 0 9 3 2 1 9 -1
Output : Non esiste una sequenza valida
Input: 0 1 3 4 5 5 5 5 5 8 4 3 2 1 1 1 0 9 3 2 1 9 9 9 9 9 -1
Output : 5 con lunghezza 5
 */

let n =Number(prompt("inserisci numero"));
let t : number = -1;
let c : number = 1;
let c1 : number = 1; 
let n1 : number = 0
while (n != -1) {
    if(n == t){
        c++
    }else {
        if (c>c1){
        n1=t
        c1= c
        c = 1}
        }

    t = n
    n =Number(prompt("inserisci numero"));
    
}


 if (c>=2){
      console.log (n1, c1)
 }else console.log ("Non valido")