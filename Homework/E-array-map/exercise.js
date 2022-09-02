// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

/************  simple map function ******************/
/* function multiplyNumbers(number) {
  return number * 100;
}
let output = numbers.map(multiplyNumbers);
console.log(output); */

/********  function declaration inside the .map() ***********/
/* let output = numbers.map(function multiplyNumbers(number) {
  return number * 100;
});
console.log(output); */

/*************   removing function name       ********************/
/*let output = numbers.map(function (number) {
  return number * 100;
});
console.log(output);
*/

/*******  using arrow function **********/
/*let multiplyNumbers = numbers.map((number) => {
  return number * 100;
});
console.log(multiplyNumbers); */

/************* arrow function removing {} braces  */
let multiplyNumbers = numbers.map((number) => number * 100);
console.log(multiplyNumbers);
