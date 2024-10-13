
let isLoggedin = false;
let username;
let password;

while (!isLoggedin) {
    username = window.prompt('Enter your Username');
    password = window.prompt('Enter your Password');

    if (username === "charles" && password === "password") {
        isLoggedin = true;
        console.log("Log-in Success nigga !")
    } else {
        console.log("Invalid Credentials");
    }
}


// const email = ["charles@gmail.com", "julia@gmail.com", "princess@gmail.com"];
// const password = ["pogiako123", "julia123", "taba123"];

// const myEmail = document.getElementById("myEmail");
// const myPassword = document.getElementById("myPassword");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");

// mySubmit.onclick = function () {

//     if (myEmail.value === "" || myPassword.value === "") {
//         subResult.textContent = "Please Enter Email or Password.";
//         return;
//     }

//     let isMatch = false;
//     for (let i = 0; i < email.length; i++) {
//         if (myEmail.value === email[i] && myPassword.value === password[i]) {
//             isMatch = true;
//             break;
//         }
//     }

//     if (isMatch) {
//         subResult.textContent = "Log-in Success!";
//     } else {
//         subResult.textContent = "Incorrect Email or Password";
//     }
// };


// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);

// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);


// const email = "charles@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension =  email.slice(email.indexOf("@") + 1 );

// console.log(username);
// console.log(extension);

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterBtn = document.getElementById("masterBtn");
// const payPalBtn = document.getElementById("payPalBtn");

// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const PaymentResult = document.getElementById("PaymentResult");

// mySubmit.onclick = function(){

//     if (myCheckbox.checked) {
//         if (masterBtn.checked || payPalBtn.checked || visaBtn.checked) {
//             subResult.textContent = 'You are Subscribed, and Paid!';
//         } else {
//             subResult.textContent = 'You are Subscribed, but not Paid!';
//         }
//     } else if (masterBtn.checked || payPalBtn.checked || visaBtn.checked) {
//         subResult.textContent = 'Please subscribe first!';
//     } else {
//         subResult.textContent = 'You are not Subscribed, and not Paid!';
//     }
    
// }


// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");

// let age;

// mySubmit.onclick = function() {

// age = myText.value;
// age = Number(age);

// if (age >= 100) {
//     resultElement.textContent = ' GTFOOO hereee';
// } else if(age == 0) {
//     resultElement.textContent = ' BABBYYY KA PAA GAGO ';
// } else if (age >= 18) {
//     resultElement.textContent = ' OKAY, PASOK BOSSSS ';
// } else if (age < 0) {
//     resultElement.textContent = ' ALIEEEN KA BAA ??? ';
// } else {
//     resultElement.textContent = ' HULEEEE, BAWAL KA DITO  ';
// }

// }


// const myButton = document.getElementById("myButton");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;

// let randomNUm1;
// let randomNUm2;
// let randomNUm3;

// myButton.onclick = function() {
//     randomNUm1 = Math.floor(Math.random() * max) + min;
//     randomNUm2 = Math.floor(Math.random() * max) + min;
//     randomNUm3 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNUm1;
//     label2.textContent = randomNUm2;
//     label3.textContent = randomNUm3;
// }
