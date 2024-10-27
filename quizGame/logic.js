
const questions = [{

    question: "Who discovered the 3 laws of motion ?",
    answers: [
        { text: "Abraham Lincoln", correct: false },
        { text: "Isaac Newton", correct: true },
        { text: "Albert Einstein", correct: false },
        { text: "LeBron James", correct: false },
    ]
},

{
    question: "What sweet food is made by bees using nectar from flowers?",
    answers: [
        { text: "Nectar", correct: false },
        { text: "Syrup", correct: false },
        { text: "Chocolate", correct: false },
        { text: "Honey", correct: true },
    ]
},

{
    question: "Who wrote the play Romeo and Juliet?",
    answers: [
        { text: "William Shakespeare", correct: true },
        { text: "J.K. Rowling", correct: false },
        { text: "Mark Twain", correct: false },
        { text: "Charles Dickens", correct: false },
    ]
},
{
    question: "Which planet is known as the Red Planet?",
    answers: [
        { text: "Jupiter", correct: false },
        { text: "Mars", correct: true },
        { text: "Saturn", correct: false },
        { text: "Venus", correct: false },
    ]
},
{
    question: "In which continent is the Sahara Desert located?",
    answers: [
        { text: "Asia", correct: false },
        { text: "Europe", correct: false },
        { text: "Australia", correct: false },
        { text: "Africa", correct: true },
    ]
},
{
    question: "How many bones are there in the adult human body?",
    answers: [
        { text: "207", correct: false },
        { text: "196", correct: false },
        { text: "206", correct: true },
        { text: "176", correct: false },
    ]
},
{
    question: "What is the smallest prime number?",
    answers: [
        { text: "1", correct: false },
        { text: "3", correct: false },
        { text: "0", correct: false },
        { text: "2", correct: true },
    ]
},
{
    question: "What is the main language spoken in Brazil?",
    answers: [
        { text: "Spanish", correct: false },
        { text: "Portuguese", correct: true },
        { text: "French", correct: false },
        { text: "English", correct: false },
    ]
},

{
    question: "Who is the current President of the Philippines ?",
    answers: [
        { text: "BBM", correct: true },
        { text: "Dugong", correct: false },
        { text: "fionaXshrek", correct: false },
        { text: "FPJ", correct: false },
    ]
},

{
    question: "Who made this game ? ",
    answers: [
        { text: "charles pogi", correct: true },
        { text: "poging charles ", correct: true },
        { text: "gwapong charles ", correct: true },
        { text: "igop charles", correct: true },
    ]
},
]


const questionElement = document.getElementById("question");
const answer = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}



function showQuestion() {
    // Clear previous answers
    answer.innerHTML = ""; // Clear existing buttons

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answerObj => {
        const button = document.createElement("button"); // Create a new button
        button.className = "btn btn-neutral text-white font-ver h-6 md:h-16"; // Set class names
        button.innerText = answerObj.text; // Set button text
        button.dataset.correct = answerObj.correct; // Add data-correct attribute

        // Add both click and touchend event listeners
        button.addEventListener("click", selectAnswer);
        button.addEventListener("touchend", selectAnswer); // Add touch event

        answer.appendChild(button); // Append the button to the answer section
    });

    nextButton.classList.add('hidden');
}

function resetState() {
    nextButton.classList.add('hidden');


    while (answer.firstChild) {
        answer.removeChild(answer.firstChild);
    }
}

// Update selectAnswer function to include touch event handling
function selectAnswer(e) {
    // Prevent default behavior if it's a touch event
    if (e.type === "touchend") {
        e.preventDefault();
    }

    const selectedBtn = e.target; // Get the clicked button
    const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the answer is correct

    // Change the button's background color based on correctness
    if (isCorrect) {
        selectedBtn.classList.add("bg-green-500");
        score++;
    } else {
        selectedBtn.classList.add("bg-red-500");
    }

    // Disable all buttons after one is clicked
    Array.from(answer.children).forEach(button => {
        button.classList.add("no-hover"); // Disable pointer events
        if (button.dataset.correct === "true") {
            button.classList.add("bg-green-500"); // Correct button color
        }
    });

    nextButton.classList.remove('hidden');
    nextButton.classList.add('flex');
}


function showScore(params) {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;

    nextButton.innerHTML = "Play again ?";

    playAgain();

    nextButton.classList.remove('hidden');
    nextButton.classList.add('flex');


}


function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Call movebox to transition between containers
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {

    if (currentQuestionIndex < questions.length) {
        handleNextButton(); // Simplified event listener
    } else
        startQuiz();
});


startQuiz();

function showGame() {

    let box = document.getElementById("box");
    let header = document.getElementById("header");
    let start = document.getElementById("start");
    let cont = document.getElementById("cont");

    gsap.to(header, {
        y: -11,
        duration: 1,
        fontSize: "40px",
        ease: "power2.out",
    })

    gsap.set(header, {
        y: 200,

    })

    box.classList.remove('hidden');
    box.classList.add('flex');

    cont.classList.remove('flex')
    cont.classList.remove('h-full')

    start.classList.add('hidden')

    gsap.set(box, {
        y: 6000,
    });


    gsap.to(box, {
        y: 0,
        duration: 2,
        ease: "power2.out"
    });


}

function playAgain(params) {

    gsap.set(box, {
        y: 0,

    });


    gsap.to(box, {
        y: 0,
        duration: 2,
        ease: "power2.out"
    });

}


function movebox() {
    let container1 = document.getElementById("container1");
    let container2 = document.getElementById("container2");


    gsap.to(container1, {
        x: 1500,
        duration: .5,
        onComplete: function () {



            gsap.set(container1, { x: -1000 });


            gsap.to(container1, {
                x: 0,
                duration: .5,
            });
        }
    });
}

