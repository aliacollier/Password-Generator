// Added querySelector w/ Id Event listener to generate button; Once clicked this will start prompt for password.
document.querySelector("#generate").addEventListener("click", writePassword);

// #2 create var and arrays for: passwordLength, specialCharacters, upperCase, lowerCase, and Numbers.
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '=', '.', '/', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~', ';', ':'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// #3 create var declarations for criteria
var verifyPasswordLength = "";
var verifySpecialCharacters;
var verifyUpperCase;
var verifyLowerCase;
var verifyNumbers;

// #4 create function & prompt for passwordLength.
  /* 
  use window.prompt()??; NO WINDOW NEEDED DEFEATS PURPOSE OF GENERATE BTN
  Using prompt put in a var and it's name in front of the
  window prompt to catch the data. Also look up edge cases mod.3.1.8
  */

function generatePassword() {
  var verifyPasswordLength = prompt("How many characters would you like for you password?");

  /*
  #5 Write Loop (while) to 1st: check if the correct number of characters is selected;
  2nd: verify the select number of characters for password length.
  !!!Write the correct loop so that if the initial question is not answered correctly
  then if loops back. Pretty sure its if/else but haven't come up with a viable code yet
  */
  while (verifyPasswordLength <= 7 || verifyPasswordLength >= 129) {
    alert("Your password must have between 8-100 characters! Please try again.");
    var verifyPasswordLength = prompt("How many characters would you like for your password?");
    }

    // #6 Alert how many characters the user selected (Note: how do I add the verifyPasswordLength string to alert??)
    alert("Your password will be " + verifyPasswordLength + " characters long.");

  // #7 Password criteria selection
  var verifySpecialCharacters = confirm("Click Ok if you want special characters in your password.");
  var verifyUpperCase = confirm("Click Ok if you want uppercase characters in your password.");
  var verifyLowerCase = confirm("Click Ok if you want lowercase characters in your password.");
  var verifyNumbers = confirm("Click Ok if you want numbers in your password.");

    // #8 Write Loop (while = best fit!) for invalid non-selection: will be prompted questions again until at least 1 of criteria is selected
    while (verifySpecialCharacters === false && verifyUpperCase === false && verifyLowerCase === false) {
      alert("You have to choose one of the selections!");
      var verifySpecialCharacters = confirm("Click Ok if you want special characters in your password.");
      var verifyUpperCase = confirm("Click Ok if you want uppercase characters in your password.");
      var verifyLowerCase = confirm("Click Ok if you want lowercase characters in your password.");
      var verifyNumbers = confirm("Click Ok if you want numbers in your password.");
    }

    // #9 Add action for password parameters (if statement???) (Also how do I combine mutltiple stings???)
    /* The concat() method is used to join two or more strings. [w3schools]
    This may allow me to combine whatever selected password criteria the user picked. Make sure syntax is correct!!!
    */

  // Variable for different characters selected to be in password
    var password = []

    if (verifySpecialCharacters) {
      password = password.concat(specialCharacters);
    }

    if (verifyUpperCase) {
      password = password.concat(upperCase);
    }

    if (verifyLowerCase) {
      password = password.concat(lowerCase);
    }

    if(verifyNumbers) {
      password = password.concat(numbers);
    }

    console.log(password);

    // #10 [EMPTY!!!] string to be filled based on loop selecting random characters to form the array... How??? [w3schools: for loop]
    // Variable for randomized selection of characters
    var passwordCriteria = ""

    for(var i = 0; i < verifyPasswordLength; i++) {
      passwordCriteria = passwordCriteria + password[Math.floor(Math.random() * password.length)];
      console.log(passwordCriteria);
    }
    return passwordCriteria;

}
// #11 Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}