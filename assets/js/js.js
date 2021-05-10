// Assignment code here
// Added querySelector w/ Id Event listener to generate button; Once clicked this will start prompt for password.
document.querySelector("#generate").addEventListener("click", writePassword);

// #2 create var and arrays for: passwordLength, specialCharacters, upperCase, and lowerCase.
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!','#', '$', '%', '&', '(', ')', '*', '+', '-', '=', '.', '/', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~',';', ':' ];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = upperCase.toLowerCase();
// can I do this?? (ABOVE CODE)

// #3 create var declarations for criteria
 var verifyPasswordLength = '';
 var verifySpecialCharacters;
 var verifyUpperCase;
 var verifyLowerCase;
 //Don't forget the verifyNumbers!!!!

// #4 create function & prompt for passwordLength.
var passwordLengthPrompt = ["How many characters would you like for you password?"]

function generatePassword() {
  var verifyPasswordLength = prompt(passwordLengthPrompt);
}
// Btn is not working...

/*
#5 Write Loop to 1st: check if the correct number of characters is selected;
2nd: verify the select number of characters for password length.
*/
while(verifyPasswordLength >= 8 || verifyPasswordLength <= 100) {
  alert("Your password must have between 8-100 characters! Please try again.");
  var verifyPasswordLength = prompt("How many characters would you like for your password?");
}

// #6 Alert how many characters the user selected (Note: how do I add the verifyPasswordLength string to alert??)
alert("Your password will be" + verifyPasswordLength + "characters long");

// #7 Password criteria selection
var verifySpecialCharacters = confirm("Click Ok if you want special characters in your password.");
var verifyUpperCase = confirm("Click Ok if you want uppercase characters in your password.");
var verifyLowerCase = confirm("Click Ok if you want lowercase characters in your password.");
//Don't forget the verifyNumbers!!!!

// #8 Write Loop (while best fit!) for invalid non-selection & prompt questions again until at least 1 of criteria is selected
while(verifySpecialCharacters === false && verifyUpperCase === false && verifyLowerCase === false &&) {
  alert("You have to choose one of the selections!");
  var verifySpecialCharacters = confirm("Click Ok if you want special characters in your password.");
  var verifyUpperCase = confirm("Click Ok if you want uppercase characters in your password.");
  var verifyLowerCase = confirm("Click Ok if you want lowercase characters in your password.");
  //Don't forget the verifyNumbers!!!!

}
// #9 Action for password parameters
// #10 Empty string to be filled based on loop selecting random characters form the array
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