// Choose a the range of numbers you want to try to guess
// Choose in how many tries you will get the number
// Type the number and press start
// Analize if the number is equal to the secret number
// If it's not then alnalize if the number is bigger or smaller than the secret number
// if the numeber is 0 or something different from a number change the h1 to "You can only type numbers from 1 to 100"
// count how many times the player has tried

let secretNumbersAlredyUsed = [];

let putTextIn = function (elemnt, text) {
  document.querySelector(elemnt).innerHTML = text;
};

// let randomNumberGenerator = (maxNumber) =>
//   Math.floor(Math.random() * maxNumber + 1);
let rangeOfNumbers = 10;
let howManyAttemps = 5;
let secretNumber = 0;
let numberGuessed = 0;
let attemp = 0;

function randomNumberGenerator(maxNumber) {
  let numeroRandom = Math.floor(Math.random() * maxNumber + 1);

  if (secretNumbersAlredyUsed.length === rangeOfNumbers) {
    putTextIn(
      `p`,
      `You've already guessed all the numbers from 1 to ${rangeOfNumbers}`
    );
  } else {
    if (secretNumbersAlredyUsed.includes(numeroRandom)) {
      return randomNumberGenerator(maxNumber);
    } else {
      secretNumbersAlredyUsed.push(numeroRandom);
      return numeroRandom;
    }
  }
}

let numberLogger = function () {
  numberGuessed = parseInt(document.getElementById(`inputNumberGuess`).value);
};

let startConditions = function () {
  putTextIn(`h1`, `Guess the number`);
  putTextIn(`p`, `Guess the number from 1 to ${rangeOfNumbers}`);
  secretNumber = randomNumberGenerator(rangeOfNumbers);
  attemp = 0;
};
startConditions();

let cleanItUp = function () {
  document.querySelector(`#inputNumberGuess`).value = ``;
};

let gameLogic = function () {
  cleanItUp();
  if (secretNumber === numberGuessed) {
    attemp++;
    putTextIn(
      `h1`,
      `You won! with ${attemp} ${attemp === 1 ? `attemp` : `attemps`} 🥳`
    );

    document.querySelector(`#reiniciar`).removeAttribute(`disabled`);
  } else {
    attemp++;
    if (numberGuessed > secretNumber) {
      putTextIn(`p`, `Try with a smaller number`);
    } else {
      putTextIn(`p`, `Try with a bigger number`);
    }
  }

  if (attemp === howManyAttemps) {
    document.querySelector(`#reiniciar`).removeAttribute(`disabled`);
    putTextIn(
      `h1`,
      `You've lost, you have surpasse ${attemp} ${
        attemp === 1 ? `attemp` : `attemps`
      }`
    );
  }
  secretNumbersAlredyUsed.push[secretNumber];
  console.log(attemp);
};

let playAgain = function () {
  // limpiar la caja
  //   cleanItUp();
  // Indicar mensaje de intervalo de numeros
  //   startMessages();
  // Generar el nuevo numero aleatorio
  //   secretNumber = randomNumberGenerator(rangeOfNumbers);
  startConditions();
  // desabilitar el boton de nuevo juego

  document.querySelector(`#reiniciar`).setAttribute(`disabled`, true);
  // reiniciar la variable de numero de intentos a 0
  attemp = 0;
};
console.log(secretNumbersAlredyUsed);
