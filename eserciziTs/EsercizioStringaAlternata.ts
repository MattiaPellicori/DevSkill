let parola1 : string = prompt ("Inserisci la prima parola");
let parola2 : string = prompt ("Inserisci la seconda parola");
let stringaAlternata : string = "";

for (let i = 0 ; i < parola1.length && i+1 ; i++ ){
    stringaAlternata += parola1[i];
    if (i<parola2.length-1){
        stringaAlternata += parola2[i+1]

    }
    i++;
}
console.log (stringaAlternata)