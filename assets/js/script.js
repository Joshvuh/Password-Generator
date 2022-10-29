// Generate prompts for password criteria - Password length, lowercase, uppercase, numbers, special characters
// At least one character type needs to be selected
// Generate password onto page under "your secure password" placeholder

// Create function to generate the password
// Create arrays for lowercase, uppercase, numbers, special characters
// (Was originally going to use arrays, but found out that you can index a string and it seemed easier to work with a string so I went with that)
// create object for desired password length that we can use when generating password
// Prompt user for input on what the password should contain
// create if statements to generate password based on user response
// require user to enter an integer between 1-128 when entering password length
// Use for loop to generate a random password
// Output that randomly generated password onto the page

// Generates a password for the user. Is called in writePassword()
function generatePassword() {
  // Strings to be used based on user response.
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "0123456789";
  // String to hold the selected options in a single string, that way we can randomly choose from all of them at once.
  var combinedCharacters = "";
  // Prompts user to input a number between 8-128.
  var promptLength = prompt("How many characters would you like your password to be?");
  // Does not allow user to enter anything but a number, will also alert the user to enter a number if they click cancel.
  if (isNaN(promptLength) || !promptLength) {
    alert("Please enter a number")
    return;
    // User will see this if they enter anything below 8 or above 128.
  } else if (promptLength < 8 || promptLength > 128) {
    promptLength = alert("Please enter a value between 8 and 128")
    return;
    // Prompts user to select password criteria, if user clicks OK the related string will be added to our combinedCharacters string.
  } else {
    var promptLower = confirm("Would you like lowercase letters?");
    if (promptLower) {
      combinedCharacters = combinedCharacters.concat(lowerCaseChar);
    }
    var promptUpper = confirm("Would you like uppercase letters?");
    if (promptUpper) {
      combinedCharacters = combinedCharacters.concat(upperCaseChar);
    }
    var promptNumbers = confirm("Would you like numbers?");
    if (promptNumbers) {
      combinedCharacters = combinedCharacters.concat(numbers);
    }
    var promptSpecial = confirm("Would you like special characters?");
    if (promptSpecial) {
      combinedCharacters = combinedCharacters.concat(specialChar);
    }
  };
  // If user clicks cancel on all of the password criteria prompts, they will see this and have to start over.
  if (!promptLower && !promptUpper && !promptNumbers && !promptSpecial) {
    alert("You must select at least one criteria.");
  };
  // Blank string to hold our randomly generated password.
  var userPassword = "";
  // For loop to generate our random password, length is based on how user answered prompt for length. randomPassword variable created so we can store the randomly indexed character, and then add it to our userPassword string.
  // Fun fact: Spent about an hour trying to figure out why my for loop wasn't working, I had a ; after "i++)"...
  for (var i = 0; i < promptLength; i++) {
    var randomPassword = combinedCharacters[Math.floor(Math.random() * combinedCharacters.length)];
    userPassword += randomPassword;
  }
  // returns userPassword to the writePassword function to let it know the generatePassword function is done and userPassword is the result.
  return userPassword;
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
