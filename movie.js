// ==========================
// Featured Movies
// ==========================

const featuredMovies = [
{
id:1,
title:"Avengers: Endgame",
genre:"Action",
rating:"8.8",
price:250,
image:"images/movie1.jpg"
},
{
id:2,
title:"John Wick 4",
genre:"Action",
rating:"8.5",
price:300,
image:"images/movie2.jpg"
},
{
id:3,
title:"Interstellar",
genre:"Sci-Fi",
rating:"9.0",
price:280,
image:"images/movie3.jpg"
},
{
id:4,
title:"The Batman",
genre:"Action",
rating:"8.7",
price:260,
image:"images/movie4.jpg"
}
];

// ==========================
// Search
// ==========================

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".movie-card");

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value))
card.style.display="block";
else
card.style.display="none";

});

});

}

// ==========================
// Hero Auto Change
// ==========================

const banners=[

"images/banner.jpg",

"images/banner2.jpg",

"images/banner3.jpg"

];

let bannerIndex=0;

const hero=document.querySelector(".hero");

if(hero){

setInterval(()=>{

bannerIndex++;

if(bannerIndex>=banners.length)
bannerIndex=0;

hero.style.backgroundImage=`url(${banners[bannerIndex]})`;

},5000);

}

// ==========================
// Movie Booking
// ==========================

function bookMovie(movieName){

localStorage.setItem("movieName",movieName);

window.location.href="details.html";

}

// ==========================
// Scroll Animation
// ==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".movie-card").forEach(el=>{

observer.observe(el);

});

// ==========================
// Navbar Background
// ==========================

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>60){

nav.style.background="#000";

}
else{

nav.style.background="rgba(0,0,0,.75)";

}

});

// ==========================
// Welcome Message
// ==========================

console.log("Welcome to CineVerse");