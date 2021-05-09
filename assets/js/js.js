// Assignment code here
// Added querySelector w/ Id Event listener to generate button; Once clicked this will start prompt for password.
document.querySelector("#generate").addEventListener("click", writePassword);

// #2 create var and declaration for: passwordLength, specialCharacters, upperCase, and lowerCase.
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialCharacters = ['!','#', '$', '%', '&', '(', ')', '*', '+', '-', '=', '.', '/', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~',';', ':' ] 
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// #3 create function & prompt for passwordLength.
var passwordLength = prompt("How many character would you like for your password?");

var passwordLength
window.prompt();

// #4 Write Loop for incorrect answer and prompt question again.
// #5 Alert how many characters the user wants.
// #6 Password criteria selection
// #7 Write Loop for inccorect answers and prompt questions again until all appropriate criteria is selected
// #8 Action for password parameters
// #9 Empty string to be filled based on loop selecting random characters form the array
// 
/* 
use window.prompt()??; NO WINDOW NEEDED DEFEATS PURPOSE OF GENERATE BTN
if so before using window.prompt put in a var and it's name in front of the
window prompt to catch the data.
*/
/*
use example let sign = prompt("What's your sign?");
if (sign.toLowerCase() == "scorpio") { alert("Wow! I'm a Scorpio too!");}
*/ 
// also look up edge cases mod.3.1.8


// #10 Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

