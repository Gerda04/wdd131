const movies = [
    {
        title: "A New Hope",
        poster: "poster1.jpg",
        summary: "Luke Skywalker embarks on a journey to rescue Princess Leia and help the Rebel Alliance destroy the Empire's ultimate weapon, the Death Star."
    },
    {
        title: "The Empire Strikes Back",
        poster: "poster2.jpg",
        summary: "The Empire strikes back, forcing Han Solo, Princess Leia, and their friends to flee while Luke Skywalker continues his training as a Jedi."
    },
    {
        title: "Return of the Jedi",
        poster: "poster3.jpg",
        summary: "Luke Skywalker confronts Darth Vader and Emperor Palpatine in a final battle to save the galaxy from the tyranny of the Empire."
    }
];

const movieTilesContainer = document.getElementById("movieTiles");

movies.forEach(movie => {
    const tile = document.createElement("div");
    tile.classList.add("movie-tile");

    tile.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title} Poster">
        <p>${movie.summary}</p>
    `;

    movieTilesContainer.appendChild(tile);
})

function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the page from refreshing
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Debugging: Log the values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    const formData = {
        name: name,
        email: email,
        message: message
    };

    if (name === '' || email === '' || message === '') {
        showError('Please fill out all fields');
    } else {
        showSuccess(formData);
    }

    form.reset(); 
}


function showSuccess(data) {
    const successMessage = document.createElement('p');
    successMessage.textContent = `Thank you, ${data.name}! Your message has been received.`;
    successMessage.style.color = 'green';
    document.querySelector('main').appendChild(successMessage);
}

function showError(message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    document.querySelector('main').appendChild(errorMessage);
}

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', handleFormSubmit);
