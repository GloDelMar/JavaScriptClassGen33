/*
  1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:
  person = {
    name:"...",
    email:"...",
    password:"..."
  }
  1.1crear un objeto vacío donde pueda añadir los elementos que introducirá el usuario
  1.2 crear las variables que van a contener los elementos
  1.3 incertar la información en el objeto correspondiente al hacer clic en el botón.

  2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"

   persons = []
  person -> persons

  3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario
  */
const botonGuardar = document.getElementById('botonCrearUsuario');

createPersonButton.addEventListener("click",(event)=>{
event.preventDefault()
console.log("click")
let inputList = document.querySelectorAll("#person-form input")
} )


  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  