const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
  ];
  
  /*
      1.- Necesitamos una lista con únicamente los nombres completos de cada usuario.
            1- identificar donde se guarda cada nombre y el apellido de los usuarios
            2- extraer los nombres y apellidos de cada usuario y guardarlo en una variable
            3- imprimir la lista

        


      2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
      3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
      4.- Necesitamos saber la edad promedio de los usuarios
      5.- Necesitamos saber la mayor edad
      6.- Necesitamos saber la menor edad
  */

      //ejercicio 1

   function nombreyApellido (objetos) {
                for (i = 0; i <objetos.length; i++){
                   console.log(objetos[i].name + " " + objetos[i].lastname)
                                    }
                  }

nombreyApellido(users)

//ejercicio 2
function getFemales (objetos){
objetos.forEach((persones) =>{
if (persones.gender == "Female"){
  console.log(persones.name)
 }
})}
     getFemales(users)

//ejercicio 3

function getFemales (objetos){
  objetos.forEach((persones) =>{
  if (persones.gender == "Male"){
    console.log(persones.name)
   }
  })}
       getFemales(users)

//ejercicio 4

const edadPromedioDeUsuarios= contar =>{
  let edades = 0
  let contador = 0
contar.forEach((item) =>{
     edades = edades + item.age
     contador++
})
let promediado = edades/contador
return promediado
}
let promedioEdad = edadPromedioDeUsuarios(users)
console.log("La edad promedio es de " + promedioEdad)

//ejercicio 5

function elMasAnciano(sabiduria){
  let elAncianoMayor = 0
  sabiduria.forEach((item)=>{
  if(item.age > elAncianoMayor){
    elAncianoMayor = item.age
  }
    })
   return elAncianoMayor 
}
let elMayor = elMasAnciano(users)

console.log(elMayor)

//ejercicio 6

function elMasJoven(enPañales){
  let elColagenoDeTodos = 99
  enPañales.forEach((item)=>{
  if(item.age < elColagenoDeTodos){
    elColagenoDeTodos = item.age
  }
    })
   return elColagenoDeTodos 
}
let elBebe = elMasJoven(users)

console.log(elBebe)