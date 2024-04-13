
//función sin sintetizar
let numbers = [2, 4, 6];

const getSquareNumbersS = (numbersArray) => {
  let result = numbers.map((item, index, arr) => {
  let squareNumber = item * item;
  console.log(squareNumber);
  return squareNumber;
});
  return result;
};

getSquareNumbersS(numbers)

//FUNCION SINTENTIZADA

const getSquareNumbers = (numbersArray) =>
  numbersArray.map((number) => number * number);

let testSquaresForEach = getSquareNumbers(numbers);
console.log(testSquaresForEach);