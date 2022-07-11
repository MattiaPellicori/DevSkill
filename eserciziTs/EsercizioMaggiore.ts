/*
Si scriva un programma che presi in input 3 valori, verifichi e stampi a schermo quali tra questi e` il piu` grande
a schermo :
E.S
Input: 3 54 12
Output: Il valore piu` grande e` : 54	
*/



let n1 = Number(prompt("Inserisci il primo numero"));
let n2 = Number(prompt("Inserisci il secondo numero"));
let n3 = Number(prompt("Inserisci il terzo numero"));

if(n1>n2){
    if (n1>n3){
        console.log("Il valore più grande è " + n1);
    } else 
        console.log ("Il valore più grande è " + n3);

}else if (n2>n3){
    console.log ("Il valore più grande è " + n2);
} else console.log ("Il valore più grande è " + n3);