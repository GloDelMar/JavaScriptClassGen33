console.log("Hola, Carlos, bienvenido a tu asistente virtual para el control de tus órdenes previstas.");

let fechaMes = prompt("Antes de iniciar, necesito saber la fecha, ¿en qué mes estamos?");

let fechaDia = parseFloat(prompt("¿qué día?"));

let expectativasOrdenes = parseInt(prompt("Ahora, dime, ¿cuántas órdenes esperabas para hoy?"));

let numOrdenes = parseFloat(prompt("¿Cuántas órdenes se entraron?"))

let porcentaje = (numOrdenes*100)/expectativasOrdenes

if  (numOrdenes >= expectativasOrdenes && fechaDia%2>0){

    console.log("Hoy es " + fechaDia +" de "+fechaMes  +  ", es fecha IMPAR, y se superaron las órdenes previstas con el " +porcentaje + "% logrado; se prevé mayor número de ordenes para mañana.");
}
  else if(numOrdenes >= expectativasOrdenes && fechaDia%2===0){
     
    console.log("Hoy es " + fechaDia +" de "+fechaMes  +  ", es fecha PAR, y se han superado las órdenes previstas con el " +porcentaje+"%.");
}
  else if (numOrdenes>expectativasOrdenes && fechaDia%2>0){
  console.log("Hoy es " + fechaDia +" de "+fechaMes  +  ", es fecha IMPAR, y no se se logró la meta, " +porcentaje + "% alcanzado.")
  }
  
  else{
    console.log("Hoy es " + fechaDia +" de "+fechaMes  +  ", es fecha PAR, y no se se logró la meta, " +porcentaje + "% alcanzado.")
  }


