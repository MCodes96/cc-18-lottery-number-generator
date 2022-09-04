let firstNumber = '';
let secondNumber = '';
let thirdNumber = '';
let fourthNumber = '';
let fifthNumber = '';
let sixthNumber = '';

//window onload - run a function that shows div prompt1....then wait x seconds, hide that div and run div prompt2

const showPrompts = async () => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  document.getElementById('prompt1').style.display = 'block';
  await delay(4000);
  document.getElementById('prompt1').style.display = 'none';
  document.getElementById('prompt2').style.display = 'block';
  await delay(4000);
  document.getElementById('prompt2').style.display = 'none';
  document.getElementById('prompt3').style.display = 'block';
  await delay(4000);
  document.getElementById('prompt3').style.display = 'none';
  document.getElementById('prompt4').style.display = 'block';
  await delay(4000);
  document.getElementById('prompt4').style.display = 'none';
  document.getElementById('prompt5').style.display = 'block';
  await delay(4000);
  document.getElementById('prompt5').style.display = 'none';
  document.getElementById('prompt6').style.display = 'block';
  await delay(4000);
  document.getElementById('prompt6').style.display = 'none';
  document.getElementById('userInputs').style.display = 'block';
};

function randomNumber(value) {
  return Math.floor(Math.random() * value);
}

function verifyNumber(num) {
  while (num > 70) {
    num = Math.floor(num / 2);
  }
  return num;
}

const numberOne = () => {
  let x = document.getElementById('firstName').value;
  let firstNumber = x.charCodeAt(0);
  return verifyNumber(firstNumber);
};

const numberTwo = () => {
  //set min and max for index position based on string length
  let x = document.getElementById('lastName').value;
  let index = Math.floor(Math.random() * x.length);
  let secondNumber = x.charCodeAt(index);
  return Number(verifyNumber(secondNumber));
};

const numberThree = () => {
  let multiplier = 0;
  let color = document.getElementById('userColor').value;
  switch (color) {
    case 'Red':
      multiplier = 45;
      break;
    case 'Blue':
      multiplier = 128;
      break;
    case 'Green':
      multiplier = 239;
      break;
  }
  thirdNumber = randomNumber(multiplier);
  return verifyNumber(thirdNumber);
};

const numberFour = () => {
  let userNumber = document.getElementById('userNumber').value;
  fourthNumber = randomNumber(userNumber);
  return verifyNumber(fourthNumber);
};

const numberFive = () => {
  //birthyear - add numbers together  ie. 1+9+7+4
  let year = document.getElementById('userBirthyear').value.toString();
  let fifthNumber = 0;
  for (let i = 0; i < year.length; i++) {
    fifthNumber += parseInt(year[i]);
  }
  return verifyNumber(fifthNumber);
};

function generateLotteryNumber() {
  firstNumber = numberOne();
  console.log(firstNumber);
  secondNumber = numberTwo();
  console.log(secondNumber);
  thirdNumber = numberThree();
  console.log(thirdNumber);
  fourthNumber = numberFour();
  console.log(fourthNumber);
  fifthNumber = numberFive();
  console.log(fifthNumber);
  sixthNumber = 70;
  console.log(sixthNumber);
  let message = document.getElementById('lotteryNumber');
  message.style.display = 'block';
  message.innerHTML = `Your Lucky Lottery Numbers Are<br>${firstNumber} - ${secondNumber} - ${thirdNumber} - ${fourthNumber} - ${fifthNumber} - ${sixthNumber}`;
  window.scrollTo(0, document.body.scrollHeight);
}

window.onload = () => {
  showPrompts();
};

const submitBtn = document.getElementById('lotterySubmit');
submitBtn.addEventListener('click', generateLotteryNumber);
