`use strictmode`;
// Desafíos
// Descarga otro proyecto haciendo clic en este enlace
// y ábrelo en Visual Studio Code.
// Cambia el contenido de la etiqueta h1 con
// document.querySelector y asigna el siguiente
// texto: "Hora del Desafío".
// Crea una función que muestre en la consola el mensaje
// "El botón fue clicado" siempre que se presione el botón
// "Console".
// Crea una función que se ejecute cuando se haga clic en
// el botón "prompt", preguntando el nombre de una ciudad
// de Brasil. Luego, muestra una alerta con el mensaje
// concatenando la respuesta con el texto: "Estuve en {ciudad}
// y me acordé de ti".
// Crea una función que muestre una alerta con el mensaje:
// "Yo amo JS" siempre que se presione el botón "Alerta".
// Al hacer clic en el botón "suma", pide 2 números y muestra
// el resultado de la suma en una alerta.

/*
let tittle = document.querySelector(`h1`);
tittle.innerHTML = "Hora del Desafío";

let putInTheConsole = function () {
  console.log("El botón fue clicado");
};

let askPrompt = function () {
  let nameCity = prompt(`Tell me the name of one brazilian cities`);
  alert(`Estuve en ${nameCity} y me acordé de ti`);
};

let putAnAlert = function () {
  alert("Yo amo JS");
};

let sumNumbers = function () {
  let firstNumber = parseInt(prompt(`What is the first number? `));
  let secondNumber = parseInt(prompt(`What is the second number? `));

  alert(`The result is ${firstNumber + secondNumber}`);
};
*/

// // Crear una función que muestre "¡Hola, mundo!" en la consola.

// let greetings = function (Leanguage) {
//   if (
//     Leanguage === `Spanish` ||
//     Leanguage === `spanish` ||
//     Leanguage === `Español` ||
//     Leanguage === `español`
//   ) {
//     console.log(`Hola que tal, como vamos?`);
//   } else if (
//     Leanguage === `English` ||
//     Leanguage === `english` ||
//     Leanguage === `Ingles` ||
//     Leanguage === `ingles`
//   ) {
//     console.log(`Hi there, how is it going?`);
//   } else console.log(`Hello world`);
// };

// // Crear una función que reciba un nombre como parámetro y muestre
// // "¡Hola, [nombre]!" en la consola.

// let greetingsToMyFriend = function (nameOfMyFriend) {
//   console.log(`hello my dear friend ${nameOfMyFriend}`);
// };

// // Crear una función que reciba un número como parámetro
// // y devuelva el doble de ese número.

// let doubleItUp = function (number) {
//   console.log(number * 2);
// };

// // Crear una función que reciba tres números como parámetros
// // y devuelva su promedio.

// let averageOf = function (number1, number2, number3) {
//   console.log((number1 + number2 + number3) / 3);
// };

// // Crear una función que reciba dos números como parámetros
// // y devuelva el mayor de ellos.

// let greaterNumberBetween = function (number1, number2) {
//   console.log(
//     `this is the greatest value: ${number1 > number2 ? number1 : number2}`
//   );
// };

// // Crear una función que reciba un número como parámetro
// // y devuelva el resultado de multiplicar ese número por sí mismo.

// let numberToThePowerOfNumber = function (number) {
//   console.log(number ** 2);
// };

// // Calling the functions
// greetings(`ingles`);
// greetingsToMyFriend(`Lin`);
// doubleItUp(5);
// averageOf(3, 0, 1000);
// greaterNumberBetween(102, 100.01);
// numberToThePowerOfNumber(9);

// Desafíos:
// Crea una función que calcule el índice de masa corporal
// (IMC) de una persona a partir de su altura en metros y peso
// en kilogramos, que se recibirán como parámetros.

// let imcCalculator = function (weight, height) {
//   return weight / height ** 2;
// };
// console.log(imcCalculator(60, 1.63));

// // Crea una función que convierta un valor en dólares, pasado
// // como parámetro, y devuelva el valor equivalente en reales
// // (moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
// // Para esto, considera la cotización del dólar igual a R$4,80.

// let currencyExchange = (dollars) =>
//   console.log(
//     `${dollars} dollars convert to colombian pesos are ${
//       dollars * 4.3
//     } colombian pesos`
//   );
// currencyExchange(2);
// // Crea una función que muestre en pantalla el área y el perímetro
// // de una sala rectangular, utilizando la altura y la anchura que se
// // proporcionarán como parámetros.

// let geometryCrap = function (wide, height) {
//   let area = wide * height;
//   let perimeter = wide * 2 + height * 2;
//   return console.log(
//     `The perimeter is ${perimeter} meters, and the are is equal to ${area} meters²`
//   );
// };
// geometryCrap(2, 5);

// // Crea una función que muestre en pantalla el área y el perímetro de
// // una sala circular, utilizando su radio que se proporcionará como parámetro.
// // Considera Pi = 3,14.

// let geometryCircularCrap = function (radius) {
//   let area = 3.14 * radius ** 2;
//   let perimeter = radius * 2 * 3.14;
//   return console.log(
//     `The perimeter is ${perimeter} meters, and the are is equal to ${area} meters²`
//   );
// };
// geometryCircularCrap(5);
// // Crea una función que muestre en pantalla la tabla de multiplicar de un
// // número dado como parámetro.

// let multiplicationTable = function (number) {
//   multiplicator = 0;
//   while (multiplicator !== 11) {
//     console.log(`${number} * ${multiplicator} = ${number * multiplicator}`);
//     multiplicator++;
//   }
// };
// multiplicationTable(2);

// Desafíos -------------------------------------------------------------------------------

// // Crea una lista vacía llamada "listaGenerica".

// let emptyList = [];

// // Crea una lista de lenguajes de programación
// // llamada "lenguagesDeProgramacion con los siguientes
// // elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

// let programingLanguages = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// // Agrega a la lista "lenguagesDeProgramacion los siguientes
// // elementos: 'Java', 'Ruby' y 'GoLang'.

// programingLanguages.push(`java`);
// // Crea una función que muestre en la consola todos los elementos
// // de la lista "lenguagesDeProgramacion.

// console.log(programingLanguages);

// // Crea una función que muestre en la consola todos los elementos
// // de la lista "lenguagesDeProgramacion en orden inverso.

// let backwards = function (arrayName) {
//   let countDown = parseInt(arrayName.length - 1);

//   while (countDown !== -1) {
//     console.log(arrayName[countDown]);
//     countDown--;
//   }
// };

// backwards(programingLanguages);

// // Crea una función que calcule el promedio de los elementos en una
// // lista de números.

// let listOfRandomNumbers = [5, 1, 3, 5, 7, 9];

// let calculeAverageOfAnArrey = function (arrayName) {
//   let countDown = parseInt(arrayName.length - 1);
//   let sum = 0;

//   while (countDown !== -1) {
//     sum = arrayName[countDown] + sum;
//     countDown--;
//   }
//   let average = sum / arrayName.length;

//   return average;
// };

// console.log(
//   `The average is equal to ${calculeAverageOfAnArrey(listOfRandomNumbers)}`
// );

// // Crea una función que muestre en la consola el número más grande y
// // el número más pequeño en una lista.

// let greaterAndSmallerNumberOf = function (arrayName) {
//   let countDown = parseInt(arrayName.length - 1);
//   let maximum = 0;
//   let minimum = 99999999999;

//   while (countDown !== -1) {
//     if (arrayName[countDown] > maximum) {
//       maximum = arrayName[countDown];
//     } else if (arrayName[countDown] < minimum) {
//       minimum = arrayName[countDown];
//     }
//     countDown--;
//   }

//   // let listOfRandomNumbers = [5, 1, 3, 5, 7, 9];

//   console.log(`The greater number in the array is ${maximum}`);
//   console.log(`The smaller number in the array is ${minimum}`);
// };

// greaterAndSmallerNumberOf(listOfRandomNumbers);

// // Crea una función que devuelva la suma de todos los elementos en una lista.

// let sum = function (arrayName) {
//   let countDown = parseInt(arrayName.length - 1);
//   let sum = 0;

//   while (countDown !== -1) {
//     sum = sum + arrayName[countDown];
//     countDown--;
//   }

//   return sum;
// };

// console.log(`The sum of all elements is ${sum(listOfRandomNumbers)}`);

// // Crea una función que devuelva la posición en la lista donde se
// // encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// let findIt = function (arrayName, parameter) {
//   let countDown = parseInt(arrayName.length - 1);

//   while (countDown !== -1) {
//     if (parameter === arrayName[countDown]) {
//       return countDown;
//     } else {
//       return -1;
//     }
//     countDown--;
//   }
// };

// findIt(listOfRandomNumbers, 0);

// // Crea una función que reciba dos listas de números del mismo tamaño
// // y devuelva una nueva lista con la suma de los elementos uno a uno.

// let arreyWithNumbersTest1 = [4, 0, 3, 1, 2, 8];
// let arreyWithNumbersTest2 = [8, 3, 2, 4, 9, 6];

// // Create a new array with zero numbers,

// // Name the Function
// let combineTheArreys = function (arreyName1, arreyName2) {
//   let newArrey = [];
//   // create a that add one number to a variable x++
//   let countDown = 0;

//   while (countDown !== arreyName1.length) {
//     // Push array1[countDown] into newarrey untill its length is = to array1.length
//     newArrey.push(arreyName1[countDown]);
//     countDown++;
//   }

//   // restar countDown to 0
//   countDown = 0;

//   while (countDown !== arreyName2.length) {
//     // Push array2{countDown] into newarrey untill its length is = to array1.length
//     newArrey.push(arreyName2[countDown]);
//     countDown++;
//   }

//   return newArrey;
// };

// console.log(combineTheArreys(arreyWithNumbersTest1, arreyWithNumbersTest2));

// // Crea una función que reciba una lista de números y devuelva una
// // nueva lista con el cuadrado de cada número.

// // Create the function with a funny name and only one parameter call arreyName
// let thisNumberToThePowerOfTwo = function (arreyName) {
//   //create a variable called countDown = 0 and a newArrey empty
//   let countDown = 0;
//   let newArrey = [];
//   //create a while loop that doesn't end untill count down is equal to arreyName.length

//   while (countDown !== arreyName.length) {
//     //   push (arreyName[countDown])² into newArrey
//     newArrey.push(arreyName[countDown] ** 2);
//     //  add 1 to the countDown var every time the loop finishes
//     countDown++;
//   }
//   // return newArrey
//   return newArrey;
// };

// console.log(thisNumberToThePowerOfTwo(arreyWithNumbersTest1));

// --------------------------------------------------------------------------------------------------------------
