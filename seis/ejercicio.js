/*1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer nombre, apellido paterno y apellido materno
    input => Israel Salinas Martínez
    output => I. S. M.
        1. Convertirno en un array
        2. Recorrer cada palabra e ir seleccionando el primer caracter
        3. convertirlo en string e imprimir.    
    */

let theNAme = "Gloriela Suárez Castañeda"

function inicialesDeNombre (elNombre){
    let name = elNombre.split(" ")
   let seleccion = name.map(item => item.charAt(0) )

   return seleccion.join(". ")
}

let lasIniciales = inicialesDeNombre(theNAme)

console.log(lasIniciales)
    /*2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta.
    Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.
        1.Tener la lista de nomnbres en un array
        2. Hacer un contador que elija numeros al asar para el indice
        3. que se imprima el nombre de este objeto que se encuentra en ese numero de indice
        4. eliminar el elemento del array
        5. volver a hacer el conteo para imprimir y borrar otro número (while) hasta que elimmine todos los elementos del array
        6. si terminaron los nombres del array mandar aviso de terminado.
    
    */

        let losNombres = ["Gloriela", "Vianey", "Brenda", "Marisol", "Olga", "Lidia", "Edna", "Marynah", "Konane", "Guadalupe"]

        function laRuleta(jugadores){
           if (jugadores.length>0){
            while (jugadores.length > 0){
            let laTombola = Math.floor(Math.random() * jugadores.length);
            let elElegido = jugadores[laTombola];
           console.log(elElegido)
            jugadores.splice(laTombola, 1);
            }
           return "¡Nos quedamos sin jugadores!"
           }}

       console.log(laRuleta(losNombres))
