//ejercicio uno, números pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares);

//ejercicio dos, cálculo del área de un círculo

const calcularAreaCirculo = radio => Math.pow(radio, 2) * Math.PI;

console.log(calcularAreaCirculo(5))

//ejercicio tres, bonus, concatenación de nombres

const nombres = ["Vianey", "Gloriela", "Olga", "Marisol", "Brenda", "Marynah", "Edna", "Lidia", "Guadalupe", "Alejandra", "Lesly", "Konane"]

const nombresConcatenados = nombres => nombres.join(", ");

console.log(nombresConcatenados(nombres));