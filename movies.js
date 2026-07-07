// =============================
// CineVerse Movies.js
// =============================

// Movie Data
const movies = [

{
id:1,
title:"Avengers: Endgame",
genre:"Action",
rating:"8.8",
duration:"181 Min",
price:250,
poster:"images/avengers.jpg"
},

{
id:2,
title:"John Wick 4",
genre:"Action",
rating:"8.5",
duration:"169 Min",
price:300,
poster:"images/johnwick.jpg"
},

{
id:3,
title:"Interstellar",
genre:"Sci-Fi",
rating:"9.0",
duration:"169 Min",
price:280,
poster:"images/interstellar.jpg"
},

{
id:4,
title:"The Batman",
genre:"Action",
rating:"8.7",
duration:"176 Min",
price:260,
poster:"images/batman.jpg"
},

{
id:5,
title:"Oppenheimer",
genre:"Drama",
rating:"8.9",
duration:"180 Min",
price:350,
poster:"images/oppenheimer.jpg"
},

{
id:6,
title:"Spider-Man: No Way Home",
genre:"Action",
rating:"8.4",
duration:"148 Min",
price:270,
poster:"images/spiderman.jpg"
}

];

// =============================
// HTML Container
// =============================

const movieGrid = document.querySelector(".movie-grid");

// =============================
// Display Movies
// =============================

function displayMovies(movieArray){

movieGrid.innerHTML="";

movieArray.forEach(movie=>{

movieGrid.innerHTML += `

<div class="movie-card">

<div class="poster">

<img src="${movie.poster}" alt="${movie.title}">

<span class="rating">

⭐ ${movie.rating}

</span>

</div>

<div class="movie-info">

<h3>${movie.title}</h3>

<p>

🎭 ${movie.genre}

</p>

<p>

⏰ ${movie.duration}

</p>

<p>

🎟 ₹${movie.price}

</p>

<button class="book-btn"

onclick="bookMovie(${movie.id})">

Book Now

</button>

</div>

</div>

`;

});

}

displayMovies(movies);

// =============================
// Search
// =============================

const search=document.getElementById("searchMovie");

if(search){

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=movies.filter(movie=>

movie.title.toLowerCase().includes(value)

);

displayMovies(filtered);

});

}

// =============================
// Genre Filter
// =============================

const buttons=document.querySelectorAll(".filter-buttons button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const genre=button.innerText;

if(genre==="All"){

displayMovies(movies);

return;

}

const filtered=movies.filter(movie=>movie.genre===genre);

displayMovies(filtered);

});

});

// =============================
// Book Movie
// =============================

function bookMovie(id){

const movie=movies.find(m=>m.id===id);

localStorage.setItem("movie",JSON.stringify(movie));

window.location.href="details.html";

}