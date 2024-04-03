console.log("Hola, Carlos, bienvenido a tu asistente virtual para el control de tus órdenes previstas.");

const fechaMes = "abril"
const fechaDia = 20

const expectativasOrdenes = 12

const numOrdenes = 10

const porcentaje = (numOrdenes*100)/expectativasOrdenes

function controlDiariaOrdenes() {

  if  (numOrdenes > expectativasOrdenes && fechaDia%2>0){

    console.log("Hoy es " + fechaDia +" de "+fechaMes  +  ", es fecha IMPAR, y se superaron las órdenes previstas con el " +porcentaje + "% logrado; se sugiere mayor número de ordenes para mañana.");
}
  else if(numOrdenes > expectativasOrdenes && fechaDia%2==0){
     
    console.log("Hoy es " + fechaDia +" de "+fechaMes  +  ", es fecha PAR, y se han superado las órdenes previstas con el " +porcentaje+"%.");
}
  else if (numOrdenes < expectativasOrdenes && fechaDia%2>0){
  console.log("Hoy es " + fechaDia +" de "+fechaMes  +  ", es fecha IMPAR, y no se se logró la meta, " +porcentaje + "% alcanzado, se sugiere disminuir órdenes para mañana.")
  }
  
  else{
    console.log("Hoy es " + fechaDia +" de "+fechaMes  +  ", es fecha PAR, y no se se logró la meta, " +porcentaje + "% alcanzado, se sugiere disminuir órdenes para mañana.")
  }
}

controlDiariaOrdenes();

