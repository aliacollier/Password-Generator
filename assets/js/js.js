// Assignment code here
var passwordLength = window.prompt("How many character would you like for your password?");

var passwordLength
window.prompt();
/* 
use window.prompt()??; 
if so before using window.prompt put in a var and it's name in front of the
window prompt to catch the data.
*/
/*
use example let sign = prompt("What's your sign?");
if (sign.toLowerCase() == "scorpio") { alert("Wow! I'm a Scorpio too!");}
*/ 
// also look up edge cases mod.3.1.8



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// my code for above
document.getElementById("generate").addEventListener("click", writePassword);



/*
first step to solving:
making the generate button prompt a user for password critia. How??
Maybe add an event listener that prompts a questions?? Is this possible?
*/
