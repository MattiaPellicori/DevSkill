function RiempiArray(array: number []){
    let n = Number(prompt ("Inserisci il numero"));
    while (n != 0){
        array.push(n)
        n = Number(prompt ("Inserisci il numero"));
    }

}

function crescente (array: number[]){
    let t : number
    for (let i = 0; i<array.length; i++){
       for (let j = i+1; j<array.length; j++){
           if (array[i]>=array[j]){
               t = array[j]
               array[j]= array[i]
               array[i]= t
           }
       } 
    }
}

function decrescente (array: number[]){
    let t : number
    for (let i = 0; i<array.length; i++){
       for (let j = i+1; j<array.length; j++){
           if (array[i]<=array[j]){
               t = array[j]
               array[j]= array[i]
               array[i]= t
           }
       } 
    }
}

function main (){
    let array : number [] = []
    RiempiArray(array)
    console.log (array)
    crescente(array)
    console.log(array)
    decrescente(array)
    console.log (array)  
}

main();