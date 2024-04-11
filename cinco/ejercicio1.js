/* 
1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra se debe seleccionar por su posicion.
  ( quiero saber la longitud de la segunda palabra)
  si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error
    2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y recibir una nueva frase sin la palabra borrada
    3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas
4.- Se requiere obtener la frase, pero escrita en orden inve
*/

let phrase = "La mejor forma de predecir el futuro es creándolo"

//Ejercicio 1
// a)convertirlo en un array
let arrayPhrase = phrase.split(" ")

console.log(arrayPhrase)
// b)usaer el índice para ubicar la segunda palabra e imprimir su lognitud

let longitudPalabra2 = arrayPhrase[1]

console.log(longitudPalabra2.length)


//Ejercicio 2
// a) convertir en un array
let arrayPhrase2 = phrase.split(" ")

console.log(arrayPhrase2)
// b) usar un método para eliminar una palabra seleccionandola con el índice
let arrayPhraseCorta = arrayPhrase2.shift(0)
// c) convertirla en string para imprimir el resultado
let arrayfinal = arrayPhrase2.join(" ")
console.log(arrayfinal)

//Ejercicio 3
//convertirlo en array
// hacer que haga conteo de la longitud de cada palabra
// que si es menor a 3 entonces la elimine
// convertir a string e imprimir

// Ejercicio 4 
//convertir a array
// usar método para invertir el orden
// convertir a string e imprimir

