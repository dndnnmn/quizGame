const myInput = document.getElementById("myInput");
const list = document.getElementById("list");

const myButton = document.getElementById("mySubmit");



myButton.addEventListener("click", (e) => {

    formValidation();

  });

  // Add an onkeydown event listener to the input field for Enter key
myInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevent the default behavior of form submission
        formValidation();
    }
});

  let formValidation = () => {
    if (myInput.value === "") {
        document.getElementById("h1").innerHTML = "pls, input something.";
        console.log("failure");
      } else {
        acceptData();
      }
  };

  let data = {};

  let acceptData = () => {
      data["text"] = myInput.value;
      console.log(data);
  
      createPost();
  };
  
  let createPost = () => {
      list.innerHTML += `
         <div class="flex w-full justify-between bg-[rgb(24,41,48)] rounded-lg px-6 items-center py-5">
           <p class="text-white text-2xl font-medium">${data.text}</p>
           <span class="options flex gap-4">
             <i onClick="editPost(this)" class="fas fa-edit text-white text-xl cursor-pointer"></i>
             <i onClick="deletePost(this)" class="fas fa-trash-alt text-white text-xl cursor-pointer"></i>
           </span>
         </div>
      `;
      myInput.value = "";   
  };
  
  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };

  let editPost = (e) => {
    myInput.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };


// openFridge(food1,food2,food3,food4);


// function oddOrEven(x) {
//     if (x %2 === 0) {
//         return true;
//     } else{
//         return false;
//     }
// }

// function isValidEmail(email) {
//      if (email.includes("@")) {
//         return true;
//      } else{
//         return false;
//      }
// }

// console.log(oddOrEven(2));
// console.log(isValidEmail("charlesgmail.com"));




// const minNum = 1;
// const maxNum = 5;
// const disText = document.getElementById("disText");
// const alertText = document.getElementById("alertText");
// const number = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// const mySubmit = document.getElementById("mySubmit");
// const myText = document.getElementById("myText");
// const bodys = document.getElementById("bodys");
// let attempts = 5;
// let guess;
// let running = true ;
// let ask;

// disText.textContent = `Please input a number between ${minNum} - ${maxNum}`;
// mySubmit.onclick = function runGame() {
//     let guess = Number(myText.value); // Convert input to number

//     if (isNaN(guess)) {
//         alertText.textContent = 'Please input a valid number!';
//     } else if (guess < minNum || guess > maxNum) {
//         alertText.textContent = `Invalid Number! Enter between ${minNum} - ${maxNum}`;
//     } else {
//         // Game logic
//         if (guess < number) {
//             alertText.textContent = 'TOO LOW, TRY AGAIN!';
//             attempts--;
//         } else if (guess > number) {
//             alertText.textContent = 'TOO HIGH, TRY AGAIN!';
//             attempts--;
//         } else {
//             alertText.textContent = 'CORRECT!!';
//             bodys.classList.add("bg-blue");

//             // Ask if they want to play again
//             setTimeout(function() { // delay reset to let the user see 'CORRECT' message
//                 if (confirm("Congratulations! Do you want to play again?")) {
//                     resetGame(); // Call function to reset the game
//                 }
//             }, 500);
//             return;
//         }

//         // Check if attempts are over
//         if (attempts < 1) {
//             alertText.textContent = 'GAME OVER!';
//             mySubmit.disabled = true; // Disable further input

//             setTimeout(function() { // delay reset to let the user see 'GAME OVER' message
//                 if (confirm("Game over! Do you want to play again?")) {
//                     resetGame(); // Call function to reset the game
//                 }
//             }, 500);
//         }
//     }
// };

// // Function to reset the game
// function resetGame() {
//     // Reset the game variables
//     attempts = 5; // or whatever number of attempts you start with
//     number = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // Generate a new random number
//     myText.value = ''; // Clear the input field
//     alertText.textContent = ''; // Clear the alert message
//     bodys.classList.remove("bg-blue"); // Reset background color if changed
//     mySubmit.disabled = false; // Re-enable the submit button

//     // Update the display text to ask for a new guess
//     disText.textContent = `Please input a number between ${minNum} - ${maxNum}`;
// }



// Function to reset the game





// const buttons = document.getElementById("button");
// const myText = document.getElementById("myText");
// const number1 = document.getElementById("number1");
// const number2 = document.getElementById("number2");



// number1.onclick = function() {
//    myText.value = number1.value
  
  
// }








// let isLoggedin = false;
// let username;
// let password;

// while (!isLoggedin) {
//     username = window.prompt('Enter your Username');
//     password = window.prompt('Enter your Password');

//     if (username === "charles" && password === "password") {
//         isLoggedin = true;
//         console.log("Log-in Success !")
//     } else {
//         console.log("Invalid Credentials");
//     }
// }


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
