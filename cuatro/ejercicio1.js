/*
se requiere:
    1.- Saber cuántos caracteres tiene la frase
    2.- Saber cuántas letras tiene la frase
    3.- Saber cuántas palabras tiene la frase
    4.- Obtener la misma frase pero en mayúsculas
    5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
    */
   
    const phrase = "La mejor forma de predecir el futuro es creándolo"

    //ejercicio 1
function conteoDeCaracteres(paContar){
    let contado = paContar.length

    return contado
}
console.log("Ejercicio 1: "+conteoDeCaracteres(phrase))

    //ejercicio 2
   function juntitosPaContar(formaditos){
        let encajados = phrase.split(" ")
        let desencajados = encajados.join("")
        let deUnoEnUno = desencajados.length
       return deUnoEnUno
   }
let contaditos = juntitosPaContar(phrase)
console.log("Ejercicio 2: "+ contaditos)

   //ejercicio 3



    //ejercicio 4
    function EmulsionDeScott(laFrase){
    const SimonDiceCrece = laFrase.toUpperCase()
    return SimonDiceCrece
}

let crecidito = EmulsionDeScott(phrase)

console.log("Ejercicio 4: "+crecidito)

   //ejercicio 5

   function escrituraChavorruca(fr4se){
    
   }