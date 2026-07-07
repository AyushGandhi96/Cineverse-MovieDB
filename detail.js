// ==========================================
// Movie Details Page
// ==========================================

// Backend URL
const API_URL = "http://localhost:5000/api";

// Read movie id from URL
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

// HTML Elements
const movieTitle = document.getElementById("movieTitle");
const moviePoster = document.getElementById("moviePoster");
const bannerImage = document.getElementById("bannerImage");

const movieGenre = document.getElementById("movieGenre");
const movieLanguage = document.getElementById("movieLanguage");
const movieDuration = document.getElementById("movieDuration");
const movieRelease = document.getElementById("movieRelease");
const movieRating = document.getElementById("movieRating");

const movieDescription = document.getElementById("movieDescription");
const longDescription = document.getElementById("longDescription");

const movieDirector = document.getElementById("movieDirector");
const movieCast = document.getElementById("movieCast");

const theatreContainer = document.getElementById("theatreContainer");
const showContainer = document.getElementById("showContainer");

const trailerBtn = document.getElementById("watchTrailer");
const bookBtn = document.getElementById("bookNow");


// ==========================================
// Load Movie Details
// ==========================================

async function loadMovie() {

    try {

        const response = await fetch(`${API_URL}/movies/${movieId}`);

        const movie = await response.json();

        movieTitle.textContent = movie.moviename;
        moviePoster.src = movie.poster;
        bannerImage.src = movie.banner;

        movieGenre.textContent = movie.genre;
        movieLanguage.textContent = movie.language;
        movieDuration.textContent = movie.duration + " mins";
        movieRelease.textContent = movie.releasedate;
        movieRating.textContent = movie.rating;

        movieDescription.textContent = movie.description;
        longDescription.textContent = movie.description;

        movieDirector.textContent = movie.director;
        movieCast.textContent = movie.cast;

        trailerBtn.onclick = function () {

            window.open(movie.trailer, "_blank");

        };

    }

    catch (error) {

        console.log(error);

        alert("Unable to load movie.");

    }

}


// ==========================================
// Load Shows
// ==========================================

async function loadShows() {

    try {

        const response = await fetch(`${API_URL}/movies/${movieId}/shows`);

        const shows = await response.json();

        showContainer.innerHTML = "";

        shows.forEach(show => {

            showContainer.innerHTML += `

            <div class="show-card">

                <h3>${show.showtime}</h3>

                <p>${show.showdate}</p>

                <p>₹ ${show.price}</p>

                <button onclick="selectShow(${show.show_id})">

                    Book Now

                </button>

            </div>

            `;

        });

    }

    catch (error) {

        console.log(error);

    }

}


// ==========================================
// Load Theatres
// ==========================================

async function loadTheatres() {

    try {

        const response = await fetch(`${API_URL}/movies/${movieId}/theatres`);

        const theatres = await response.json();

        theatreContainer.innerHTML = "";

        theatres.forEach(theatre => {

            theatreContainer.innerHTML += `

            <div class="theatre-card">

                <h3>${theatre.theatername}</h3>

                <p>${theatre.city}</p>

                <p>${theatre.address}</p>

            </div>

            `;

        });

    }

    catch (error) {

        console.log(error);

    }

}


// ==========================================
// Select Show
// ==========================================

function selectShow(showId) {

    localStorage.setItem("showId", showId);

    window.location.href = "seats.html";

}


// ==========================================
// Book Ticket Button
// ==========================================

bookBtn.addEventListener("click", () => {

    if (localStorage.getItem("showId")) {

        window.location.href = "seats.html";

    }

    else {

        alert("Please select a show first.");

    }

});


// ==========================================
// Start
// ==========================================

loadMovie();
loadShows();
loadTheatres();