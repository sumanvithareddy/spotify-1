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
