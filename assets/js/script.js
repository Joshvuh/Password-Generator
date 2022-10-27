// Generate prompts for password criteria - Password length, lowercase, uppercase, numbers, special characters
// At least one character type needs to be selected
// Generate password onto page under "your secure password" placeholder

// Create function to generate the password
// Create arrays for lowercase, uppercase, numbers, special characters
// create object for desired password length that we can use when generating password
// create if statements to generate password based on user response
// require user to enter an integer between 1-128 when entering password length

var userPassword = "";

const lowerCaseChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function generatePassword() {
  var promptLength = prompt("How many characters would you like your password to be?");
  if (!promptLength) {
    alert("Please enter a number")
    return;
  } else if (promptLength < 10 || promptLength > 128) {
    promptLength = alert("Please enter a value between 10 and 128")
    return;
  } else {
    var promptLower = confirm("Would you like lowercase letters?");
    var promptUpper = confirm("Would you like uppercase letters?");
    var promptNumbers = confirm("Would you like numbers?");
    var promptSpecial = confirm("Would you like special characters?");
  };

  if (!promptLower && !promptUpper && !promptNumbers && !promptSpecial) {
    alert("You must select at least one criteria.");
  };

  if (promptLower == true && promptUpper == true && promptNumbers == true && promptSpecial == true) {
    alert("You must select at least one criteria.");
  };
};



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
