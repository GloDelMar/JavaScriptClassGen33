const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais: "México",
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      pais: "México",
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      pais: "Colombia",
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      pais: "Ecuador",
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
  /*
      1.- Necesito conocer la edad promedio de todos los perros

      2.- Necesito obtener una lista de perros basados en el país al que pertenecen
      3.- Necesito una lista de los códigos postales de los perros
      4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos
      */
  
//Ejercicio 1
const edadPromedioDeChuchitos = shushos =>{
    let edades = 0
    let contador = 0
 shushos.forEach((item) =>{
       edades = edades + item.edad
       contador++
 })
 let promediado = edades/contador
return promediado
}
let promedioEdad = edadPromedioDeChuchitos(canes)
console.log("La edad promedio de los chuchitos es de " + promedioEdad)
 
            //solucion del mentor

const getAgeAverage = (dataArray) => {
    let total = dataArray.reduce((accum, current) =>{
    return accum + current.edad
    }, 0);
    let ageAverage = total / dataArray.length;
    return ageAverage
};

    console.log(getAgeAverage(canes))

    //ejercicio 2 mentor

const getDogsByCountry = (dataArray, country)=> {
    let result = dataArray.filter(
        (dog => dog.pais.toLowerCase()=== country.toLowerCase())
    )
if(!result.length){
    // --> !result.length=  <-- signfica si no hay longitud
    return "No hay perros que pertenezcan a " + country
}
else{
    return result
}
}

console.log(getDogsByCountry(canes, "México"))
console.log(getDogsByCountry(canes, "China"))

//ejercicio 3 mentor

const getZipCode = (dataArray) =>
 dataArray.map(dog => dog.direccion.codigoPostal)

console.log(getZipCode(canes))

//ejercicio 4 mentor

const getCountryList = (dataArray) =>
dataArray.reduce(
   (accum, current) =>
accum.includes(current.pais) ? accum : [...accum, current.pais],
[]
)
console.log(getCountryList(canes))

//usando forEach

const getCCountryList = (dataArray) => {
    let result = []
    dataArray.forEach(dog =>{
        if(!result.includes(dog.pais)){
            result=[...result, dog.pais]
        }
    })
    return result;
}

console.log(getCCountryList(canes))