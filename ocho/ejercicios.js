let canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
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
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
  /*
      1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
            cambiamos la información de edad, localizar en cada objeto el elemento "edad" para modificarlo, para eso multiplicaremos por 7
            creamos la lista con el elemento modificado

      2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
            buscar en cada objeto el elemento que indique la información requerida
            se compara si el elemento indica false o true para saber si está vacunado o 
            guardar en un total aquellos que sí están vacunados
            mostrar el total de perros vacunados

      3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
          "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "

      4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
            buscar en cada objeto la propiedad de edades
            sumar las edades hasta obtener un total
            sacar promedio de edad
            imprimir el promedio de la edad

      5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
            se busca en cada objeto el elemento "vacunado"
            se comprueba si dice false o true
            si dice true, se cambia el valor a Sí
            si dice false, se cambia el valor a verdadero
            retornar a una nueva lista
            imprimir la nueva lista con el valor de vacunado actualizado

      6.- Necesitamos una nueva lista con únicamente el nombre de cada can


  */


//ejercicio 1

const cambiarEdadCanina = (canes) => canes.map((chuchos)=> 
chuchos.edad* 7)

let edadesPerrunasLista = cambiarEdadCanina(canes)

console.log(edadesPerrunasLista)

//ejercicio 2

const contarPerrosVacunados = conteo =>{

 let vacunacion=0
  canes.forEach((item)=> {
    if (item.vacunado === true){
    vacunacion++
    }
  }
)
return vacunacion
}

let censoVacunacion = contarPerrosVacunados(canes)

console.log("Hay "+ censoVacunacion + " en total.")

//ejercicio 3

function obtenerLaInfoDeseada (informacion) {
const extraInfoPerruna = informacion.map((item) => {

  return `${item.nombre}, ${item.direccion.calle}, #${item.direccion.numero}, ${item.direccion.colonia}, ${item.direccion.codigoPostal}`
})

return extraInfoPerruna.join('\n') 
}

let agendaPerruna = obtenerLaInfoDeseada(canes)
console.log(agendaPerruna)

//ejercicio 4

const edadPromedioDeChuchitos = contar =>{
     let edades = 0
     let contador = 0
  canes.forEach((item) =>{
        edades = edades + item.edad
        contador++
  })
  let promediado = edades/contador
return promediado
}
let promedioEdad = edadPromedioDeChuchitos(canes)
console.log("La edad promedio de los chuchitos es de " + promedioEdad)

//ejercicio 5

const actualizarRespuestaVacunacion = respuestaVacuna =>{

  const modificaVacunacion = respuestaVacuna.map((item)=>{
    item.vacunado = item.vacunado ? "Sí" : "No";
    return item;
  })
  return modificaVacunacion
}
let respuestaVacunadoActualizada = actualizarRespuestaVacunacion(canes)

console.log(respuestaVacunadoActualizada)

//ejercicio 6

const nombresChuchitos = diganPresente =>{
  const enlistarChuchitos = diganPresente.map((item)=>{
    return item.nombre
  })
  return enlistarChuchitos
}

let losChuchitos = nombresChuchitos(canes)

console.log(losChuchitos)