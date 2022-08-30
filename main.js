let firstNumber = "";
let secondNumber = "";
let thirdNumber = "";
let fourthNumber = "";
let fifthNumber = "";
let sixthNumber = "";

const firstName = document.getElementById("first-name").value;
const testing = "grey";
// const lastName = document.getElementById("last-name").value;
// const userColor = document.getElementById("user-color").value;
// const userNumber = document.getElementById("user-number").value;
// const birthyear = document.getElementById("user-birthyear").value;
// const userEyes = document.getElementById("user-eyes").value;

//First letter of name will be the multiplier for the math.Random().
//All Lottery numbers must be between 0 - 70
//add default reference value for color, eyes
//Math.random * birthyear.....use the last index for the multiplier and the second to last as the divider

function randomNumber(value) {
  return Math.floor(Math.random() * value);
}

/*******************************
   * GENERATE LOTTERY NUMBER NOTES
   * 
   * pull in firstName value once linked, using text for testing
  convert string to uppercase then minus 20 which would bring the max number to 70 for a 'Z'
  if we are not validating, then run an if else, and if the charcode comes back over 70, set the variable to be 70.

   * *****************************/

function generateLotteryNumber() {
  let text = testing.toUpperCase().charCodeAt(0) - 20;
  if (text > 70) {
    return (firstNumber = 70);
  } else {
    return (firstNumber = text);
  }
  console.log(firstNumber);
}

console.log(randomNumber(7));

console.log(generateLotteryNumber());
console.log(firstNumber);
