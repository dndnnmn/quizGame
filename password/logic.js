const alertText = document.getElementById("alertText");
const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
var passwordStrength = document.getElementById("passwordStrength");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.textContent = slider.value;

slider.oninput = function() {
    output.textContent = this.value; 
}

function generatePassword(length, lowerCase, upperCase, numbers, specialChar) {
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyxz";
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numberChars = "0123456789"
    const specialChars = "!@#$%^&*()_+-=}[]:><?/"

    let allowedChars = "";
    let password = "";

    allowedChars += lowerCase ? lowercaseChars : "";
    allowedChars += upperCase ? uppercaseChars : "";
    allowedChars += numbers ? numberChars : "";
    allowedChars += specialChar ? specialChars : "";

    if (length <= 0) {
          alertText.textContent = "password length must be at least 1";
          return "";
    } 
    
    if (allowedChars.length === 0){
       alertText.textContent = "At least 1 checkbox should be checked" ;
       return "";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
        
    }

    return password;
}

const upperCase= document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const numbers= document.getElementById("numbers");
const specialChar = document.getElementById("specialChar");

function isUppercaseSelected() {
    return upperCase.checked; 
}

function isLowercaseSelected() {
    return lowerCase.checked; 
}

function isNumbersSelected() {
    return numbers.checked; 
}

function isSpecialCharSelected() {
    return specialChar.checked; 
}


function generatePasswordHandler() {
    alertText.textContent = 'Password Generator';

    let passwordLength = slider.value; 
    const password = generatePassword(passwordLength, isLowercaseSelected(), isUppercaseSelected(), isNumbersSelected(), isSpecialCharSelected());
    
    bg.classList.remove('bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))]', 'from-blue-700', 'via-blue-800', 'to-gray-800');
    
    // Add a Tailwind green background class
    bg.classList.add('bg-green-500');

    myText.value = password; 
    

    if ((isLowercaseSelected() || isUppercaseSelected()) && (isNumbersSelected() || isSpecialCharSelected()) && password.length >= 8) {
        passwordStrength.textContent = "Strong";
        passwordStrength.style.color = "#26d730";
    } else if( ((isLowercaseSelected() || isUppercaseSelected()) || (isNumbersSelected() || isSpecialCharSelected())) && password.length >= 6) {
        passwordStrength.textContent ="Moderate";
        passwordStrength.style.color = "orange"; 
    } else {
        passwordStrength.textContent ="Weak";
        passwordStrength.style.color = "#ff5925";
    }
}




let copy = (myText) => {
    document.getElementById(myText).select();
    document.execCommand("copy");
}


