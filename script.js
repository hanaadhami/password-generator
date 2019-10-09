//Alerts
alert("Let's make your password!");

//parseInt: is what converts the prompt into an integer

var passLength = parseInt(prompt('How many characters would you like your password to be?'));
var confirmNum = confirm('Do you want numbers in your password?');
var confirmLowercase = confirm('Do you want lowercase characters in your password?');
var confirmUppercase = confirm('Do you want uppercase characters in your password?');
var confirmSpecialChar = confirm('Do you want special characters in your password?');

var passNum = "0123456789";
var passLower = "abcdefghijklmnopqrstuvwxyz";
var passUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passSpecial ="!@#$%&";


// check password length
//need to rearrange the order because prompts continue
if(passLength < 8){
  alert("Password length must be greater than 8 characters. Please re-enter desired length.");
} else if(passLength > 128){
  alert("Password length must be less than 128 characters. Please re-enter desired length.");
}

// if they select they want only numbers
// += with an equal sign only you would have only one random character. with the plus it'll make it more than one
if (confirmNum){
  var generatedpassword = "";
  for (var i = 0; i < passLength; i++){
    generatedpassword += passNum.charAt(Math.floor(Math.random()*passLength));
  }
  alert(generatedpassword);
}

// if they select numbers & lower case
// && is meant for conditional factors- if they're both true. + is for combining
  if(confirmNum && confirmLowercase){
    var generatedpassword = "";
    for (var i = 0; i < passLength; i++){
      var numAndLower = passNum + passLower;
      generatedpassword += numAndLower.chartAt(Math.floor(Math.random()*passLength));
    }
    alert(generatedpassword);
}

//if they select numbers & upper case
if(confirmNum && confirmUppercase){
  var generatedpassword = "";
  for (var i = 0; i < passLength; i++){
    var numAndUpper = passNum + passUpper;
    generatedpassword += numAndUpper.charAt(Math.floor(Math.random()*passLength));
  }
  alert(generatedpassword);
}

//if they select number & both cases
if(confirmNum && confirmLowercase && confirmUppercase){
var generatedpassword = "";
  for (var i = 0; i < passLength; i++){
    var numAndBoth = passNum + passLower + passUpper;
    generatedpassword += numAndBoth.charAt(Math.floor(Math.random()*passLength));
  }
  alert(generatedpassword);
}

//if they select numbers & both cases & special
if(confirmNum && confirmLowercase && confirmUppercase && confirmSpecialChar){
var generatedpassword = "";
  for (var i = 0; i < passLength; i++){
    var all = passNum + passLower + passUpper + passSpecial;
    generatedpassword += all.charAt(Math.floor(Math.random()*passLength));
  }
  alert(generatedpassword);
}

//if they select numbers & special
if(confirmNum && confirmSpecialChar){
  var generatedpassword = "";
  for (var i = 0; i < passLength; i++){
    var numAndSpecial = passNum + passSpecial;
    generatedpassword += numAndSpecial.charAt(Math.floor(Math.random()*passLength));
  }
}

//If they select lower and special
if(confirmLowercase && confirmSpecialChar){
  var generatedpassword = "";
  for (var i = 0; i < passLength; i++){
    var lowerAndSpecial = passLower + passSpecial;
    generatedpassword += lowerAndSpecial.charAt(Math.floor(Math.random()*passLength));
  }
  alert(generatedpassword);
}

//If they select upper and special
if(confirmUppercase && confirmSpecialChar){
  var generatedpassword = "";
  for (var i = 0; i < passLength; i++){
    var upperAndSpecial = passUpper + passSpecial;
    generatedpassword += upperAndSpecial.charAt(Math.floor(Math.random()*passLength));
  }
}

//If they select upper and lower and special
if(confirmLowercase && confirmUppercase && confirmSpecialChar){
  var generatedpassword = "";
  for (var i = 0; i < passLength; i++){
    var bothAndSpecial = passUpper + passLower + passSpecial;
    generatedpassword += bothAndSpecial.charAt(Math.floor(Math.random()*passLength));
  }
  alert(generatedpassword);
}