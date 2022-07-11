let parola1 : string = prompt ("Inserisci la prima parola"); 
let parola2 : string = prompt ("Inserisci la seconda parola");
let parolaReverse : string = "";

for (let i = parola2.length-1; i >= 0; i--){
    parolaReverse += parola2[i]
}
console.log (parola1 + parolaReverse)