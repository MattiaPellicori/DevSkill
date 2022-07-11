//Scrivere un programma che preso in input Il nome e cognome di una persona e li restituisca tutto in maiuscolo
// Cercare sul web come rendere una stringa "uppercase"
// La logica che trasforma il testo, deve essere impletementa dentro una funzione che si chiama : maiuscolo
// Input : Marco Anastasio
// Ouput : MARCO ANASTASIO

function Maiuscolo (nome:string , cognome:string){
    return (nome.toUpperCase() + " " + cognome.toUpperCase())
}
let nome =String(prompt("inserisci il nome"));
let cognome =String(prompt("inserisci il cognome"));

console.log(Maiuscolo(nome, cognome))