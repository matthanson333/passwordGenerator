let criteriaLowerEl = document.getElementById("criteriaLower");
let criteriaUpperEl = document.getElementById("criteriaUpper");
let criteriaNumberEl = document.getElementById("criteriaNumber");
let criteriaSpecialEl = document.getElementById("criteriaSpecial");

//possible password values broken into subtype
const valuesLower = "abcdeghijklmnopqrstuvwxyz";
const valuesUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const valuesNum = "1234567890";
const specialChars = "!@#$%^&*?><,./=+";

//generate random password
function generate() {
  //set password length/complexity
  let complexity = document.getElementById("slider").value;

  //possible password values
  // const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*?";

  let criteriaLower = criteriaLowerEl.checked;
  let criteriaUpper = criteriaUpperEl.checked;
  let criteriaNumber = criteriaNumberEl.checked;
  let criteriaSpecial = criteriaSpecialEl.checked;
console.log(criteriaLower, criteriaUpper, criteriaNumber, criteriaSpecial)
  let password = "";

  // logic to concatenate password variables
  let values = "";
  if (criteriaLower == true) {
    values += valuesLower;
  }
  if (criteriaUpper == true) {
    values += valuesUpper;
  }
  if (criteriaNumber == true) {
    values += valuesNum;
  }
  if (criteriaSpecial == true) {
    values += specialChars;
  }
  //create for loop to choose password characters
  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //add password to textbox
  document.getElementById("display").value = password;

  //add password to previously generated password list
  document.getElementById("lastNums").innerHTML += password + "<br  />";
}

//set default length dislpay of 25
document.getElementById("length").innerHTML = "length: 25";

//function to get length based on slider position
document.getElementById("slider").oninput = function () {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML =
      "length: " + document.getElementById("slider").value;
  } else {
    document.getElementById("length").innerHTML = "length: 1";
  }
};

//function to copy password to clipboard
function copyPassword() {
  document.getElementById("display").select();

  document.execCommand("copy");

  alert("Password copied to clipboard");
}
