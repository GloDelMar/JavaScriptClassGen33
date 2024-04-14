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
let palabraParaMedir = 3

function conteoDeLetras(laFrase) {
let arrayPhrase = laFrase.split(" ")

let longitudPalabra2 = arrayPhrase[palabraParaMedir]
if (longitudPalabra2 == undefined){
  return "Ese indice no es válido"
}
return longitudPalabra2.length
}
let totalLetras = conteoDeLetras(phrase)
console.log(totalLetras)

//Ejercicio 2
let indice = 5

function eliminarPalabras(laFrase) {

  let arrayPhrase2 = phrase.split(" ")
 
   let laPalabra = arrayPhrase2[indice]

  const arrayPhraseCortada = arrayPhrase2.filter(palabra => palabra != laPalabra)

 return arrayPhraseCortada.join(" ");

}
  let cortadaLaFrase = eliminarPalabras(phrase)
console.log (cortadaLaFrase)

//Ejercicio 3
//convertirlo en array split
// hacer que haga conteo de la longitud de cada palabra con un  for
// que si es menor a 3 entonces la elimine con filter
// convertir a string e imprimir join

function eliminarLasCortas(unaPhrase){
  let frase = unaPhrase.split(" ")
  for(i=0; i < frase.length; i++){
    if(frase[i].length <= 3){
      frase = frase.filter(palabra => palabra !== frase[i])
    }
  }
  return frase.join(" ")
}

let fraseMasCorta = eliminarLasCortas(phrase)
console.log(fraseMasCorta)


// Ejercicio 4 
//convertir a array
// usar método para invertir el orden
// convertir a string e imprimir

function deReversaMami(laConga){
 let deReversa = laConga.split(" ")

  paraAtrasTrasTras = deReversa.reverse()

  return paraAtrasTrasTras.join(" ")
}
let esarhp = deReversaMami(phrase)

console.log(esarhp)