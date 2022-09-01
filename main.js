/******************************
 * THIS SECTION OF CODE IS WORKING
 * COMMENTED CODE BELOW THIS SECTION
 * IS NOTES AND CODE NOT USED YET
 *
 *******************************/
let firstNumber = "";
let secondNumber = "";
let thirdNumber = "";
let fourthNumber = "";
let fifthNumber = "";
let sixthNumber = "";

function randomNumber(value) {
  return Math.floor(Math.random() * value);
}

const numberOne = () => {
  let x = document.getElementById("firstName").value;
  let firstNumber = x.charCodeAt(0);
  return firstNumber;
};

const numberTwo = () => {
  //set min and max for index position based on string length
  let x = document.getElementById("lastName").value;
  let index = Math.floor(Math.random() * x.length + 1);
  let secondNumber = x.charCodeAt(index);
  return secondNumber;
};

const numberThree = () => {
  let multiplier = 0;
  let color = document.getElementById("userColor").value;
  switch (color) {
    case "Red":
      multiplier = 45;
      break;
    case "Blue":
      multiplier = 128;
      break;
    case "Green":
      multiplier = 239;
      break;
  }
  thirdNumber = randomNumber(multiplier);
  return thirdNumber;
};

const numberFour = (min, max) => {
  fourthNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return fourthNumber;
};

const numberFive = () => {
  //birthyear - lets add numbers together  ie. 1+9+7+4
  let year = document.getElementById("userBirthyear").value;
  let fifthNumber = 0;
  while (year) {
    digit = year % 10;
    fifthNumber += digit;
    year = (year - digit) / 10;
    return fifthNumber;
  }
  // for (let i = 0; i < year.length; i++) {
  //   let total = year[i];
  //   total += parseInt(year[i], 10);
  //   console.log(total);
  // }
};

function generateLotteryNumber() {
  firstNumber = numberOne();
  secondNumber = numberTwo();
  thirdNumber = numberThree();
  fourthNumber = numberFour(1, 70);
  fifthNumber = numberFive();
  sixthNumber = 70;
  let message = document.getElementById("lotteryNumber");
  message.innerHTML = `Your Lucky Lottery Numbers Are<br>${firstNumber} - ${secondNumber} - ${thirdNumber} - ${fourthNumber} - ${fifthNumber} - ${sixthNumber}`;
}

const userPickedColor = document.getElementById("userColor");
userPickedColor.addEventListener("change", numberThree);
