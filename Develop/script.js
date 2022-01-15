// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getLength() {
  // get length of password from user
  var length = window.prompt("Enter a length between 8 and 128");

  if(length == "" || length === null)
  {
    window.alert("Please enter a number between 8 and 128")
    return getLength();
  }

  length = parseInt(length);
  // checking that length is in range and length is a number
  var check = false;
  for(var i = 8; i < 129; i++)
  {
    if(length === i)
    {
      check = true;
    }
  }
  if(!check)
  {
    window.alert("Please enter a number between 8 and 128");
    return getLength();
  }
  return length;
}

function generatePassword() {
  var passChars = "";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "123456789";
  var specialChars = "~`!@#$%^&*()-_+={}[]|:;<>,.?";

  var wantLength = window.confirm (
    "Would you like to add a length to your password?"
  );
  if(wantLength)
  {
    var length = getLength();
    console.log(length);
  }

  var useLower = window.confirm (
    "Would you like your password to contain lowercase letters?"
  );
  if(useLower)
  {
    passChars += lowerChars;
    console.log(passChars);
  }

  var useUpper = window.confirm (
    "Would you like your password to contain uppercase letters?"
  );
  if(useUpper)
  {
    passChars += upperChars;
    console.log(passChars);
  }

  var useNumbers = window.confirm (
    "Would you like your password to contain numbers?"
  );
  if(useNumbers)
  {
    passChars += numbers;
    console.log(passChars);
  }

  var useSpecial = window.confirm (
    "Would you like your password to contain special characters?"
  );
  if(useSpecial)
  {
    passChars += specialChars;
    console.log(passChars);
  }
}

// Write password to the #password input
function writePassword() {
  console.log("clicked");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
