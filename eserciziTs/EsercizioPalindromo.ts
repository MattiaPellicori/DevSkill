let parola = String(prompt("inserisci parola"));

let lista : string [] = parola.split (""); 
let listaContrario : string [] = parola.split("").reverse();
let v : boolean = true; 

for (let i : number = 0 ; i<parola.length ; i++) {

if (lista[i] != listaContrario[i]) {
    v = false
    break
}

}
if (!v) {
    console.log ("no palindromo")
} else console.log ("palindromo") 