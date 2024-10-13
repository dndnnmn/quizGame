 // Function to create a card component
 function createCard(title, imageUrl, description) {
    return `
        <a href = "#" class="card shadow-xl bg-[#2b2b2b] text-white w-full md:w-full">
            <figure class="w-full h-80 md:h-80 lg:h-[252px]">
                 <img src="${imageUrl}" alt="${title}" class="object-cover w-full h-full" />
            </figure>

            <div class="card-body">
                <h2 class="card-title">
                    ${title}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>${description}</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div>
            </div>
        </a>
    `;
}

const cardsData = [
    {
        title: "Shoes 1",
        imageUrl: "card.png",
        description: "biliii na mga tangaaa haahjajahj wdenjbdwe ebdewbdb"
    },
    {
        title: "Shoes 2",
        imageUrl: "card.png",
        description: "biliii na mga tangaaa haahjajahj wdenjbdwe ebdewbdb"
    },
    {
        title: "Shoes 3",
        imageUrl: "card.png",
        description: "biliii na mga tangaaa haahjajahj wdenjbdwe ebdewbdb"
    },
    {
        title: "Shoes 4",
        imageUrl: "card.png",
        description: "biliii na mga tangaaa haahjajahj wdenjbdwe ebdewbdb"
    },
    {
        title: "Shoes 4",
        imageUrl: "card.png",
        description: "biliii na mga tangaaa haahjajahj wdenjbdwe ebdewbdb"
    },
    {
        title: "Shoes 4",
        imageUrl: "card.png",
        description: "biliii na mga tangaaa haahjajahj wdenjbdwe ebdewbdb"
    },
];

// Function to inject cards into the DOM 
function renderCards() {
    const cardsContainer = document.querySelector('.grid'); // Select the grid container
    cardsData.forEach(card => {
        cardsContainer.innerHTML += createCard(card.title, card.imageUrl, card.description); // Inject the card HTML
    });
    
    // Add the "Get Started" button at the bottom of the cards
  
}

// Call the renderCards function to populate the cards
renderCards();

 // Existing scroll event code
 window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    const links = navbar.querySelectorAll("a, summary,btn, svg");

    if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "shadow-lg");
        navbar.classList.remove("bg-transparent");
        links.forEach(link => {
            link.classList.add("text-black");
            link.classList.remove("text-white");
        });
    } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-white", "shadow-lg");
        links.forEach(link => {
            link.classList.add("text-white");
            link.classList.remove("text-black");
        });
    }
});
