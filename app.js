// ===============================
// Melody Music App
// ===============================

// Sample Songs
const songs = [
{
    title: "Midnight Dream",
    artist: "Nova",
    image: "images/song1.jpg",
    audio: "songs/song1.mp3"
},
{
    title: "Sky High",
    artist: "Aurora",
    image: "images/song2.jpg",
    audio: "songs/song2.mp3"
},
{
    title: "Forever",
    artist: "Echo",
    image: "images/song3.jpg",
    audio: "songs/song3.mp3"
},
{
    title: "Feel Good",
    artist: "Alex",
    image: "images/song4.jpg",
    audio: "songs/song4.mp3"
},
{
    title: "Ocean",
    artist: "Wave",
    image: "images/song5.jpg",
    audio: "songs/song5.mp3"
}
];

// Current Song Index
let currentSong = 0;

// Audio Object
const audio = new Audio();

// Footer Elements
const playBtn = document.querySelector(".play");
const backBtn = document.querySelector(".fa-backward-step");
const nextBtn = document.querySelector(".fa-forward-step");

const songImage = document.querySelector(".song img");
const songTitle = document.querySelector(".song h4");
const songArtist = document.querySelector(".song p");

const volume = document.querySelector(".volume input");

// ===============================
// Load Song
// ===============================

function loadSong(index){

    audio.src = songs[index].audio;

    songImage.src = songs[index].image;

    songTitle.innerHTML = songs[index].title;

    songArtist.innerHTML = songs[index].artist;

}

loadSong(currentSong);

// ===============================
// Play Song
// ===============================

function playSong(){

    audio.play();

    playBtn.classList.remove("fa-circle-play");

    playBtn.classList.add("fa-circle-pause");

}

// ===============================
// Pause Song
// ===============================

function pauseSong(){

    audio.pause();

    playBtn.classList.remove("fa-circle-pause");

    playBtn.classList.add("fa-circle-play");

}

// ===============================
// Toggle
// ===============================

let playing = false;

playBtn.addEventListener("click",()=>{

    if(!playing){

        playSong();

        playing = true;

    }

    else{

        pauseSong();

        playing = false;

    }

});
// ==========================================
// NEXT SONG
// ==========================================

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);

    if (playing) {
        audio.play();
    }

}

nextBtn.addEventListener("click", nextSong);

// ==========================================
// PREVIOUS SONG
// ==========================================

function previousSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);

    if (playing) {
        audio.play();
    }

}

backBtn.addEventListener("click", previousSong);

// ==========================================
// AUTO PLAY NEXT SONG
// ==========================================

audio.addEventListener("ended", () => {

    nextSong();

});

// ==========================================
// VOLUME
// ==========================================

audio.volume = 0.7;

volume.value = 70;

volume.addEventListener("input", () => {

    audio.volume = volume.value / 100;

});

// ==========================================
// PLAY SONG WHEN CARD IS CLICKED
// ==========================================

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        currentSong = index;

        loadSong(currentSong);

        playSong();

        playing = true;

    });

});

// ==========================================
// SPACEBAR PLAY / PAUSE
// ==========================================

document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {

        event.preventDefault();

        if (playing) {

            pauseSong();

            playing = false;

        } else {

            playSong();

            playing = true;

        }

    }

});

// ==========================================
// DOUBLE CLICK TO LIKE SONG
// ==========================================

cards.forEach(card => {

    card.addEventListener("dblclick", () => {

        card.classList.toggle("liked");

    });

});

// ==========================================
// HOVER EFFECT
// ==========================================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

// ==========================================
// SEARCH BAR (Frontend Only)
// ==========================================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h3").innerText.toLowerCase();

        const artist = card.querySelector("p").innerText.toLowerCase();

        if (
            title.includes(value) ||
            artist.includes(value)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ==========================================
// START BUTTON
// ==========================================

const startButton = document.querySelector(".banner button");

startButton.addEventListener("click", () => {

    playSong();

    playing = true;

});

// ==========================================
// READY
// ==========================================

console.log("Melody Music App Loaded Successfully!");
