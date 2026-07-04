// =====================================
// Melody Search Page
// =====================================

// Temporary song data
// Later this will come from the backend API

const songs = [

{
    id:1,
    title:"Midnight Dream",
    artist:"Nova",
    image:"images/song1.jpg"
},

{
    id:2,
    title:"Sky High",
    artist:"Aurora",
    image:"images/song2.jpg"
},

{
    id:3,
    title:"Forever",
    artist:"Echo",
    image:"images/song3.jpg"
},

{
    id:4,
    title:"Feel Good",
    artist:"Alex",
    image:"images/song4.jpg"
},

{
    id:5,
    title:"Ocean",
    artist:"Wave",
    image:"images/song5.jpg"
},

{
    id:6,
    title:"Fire Inside",
    artist:"Alan",
    image:"images/song6.jpg"
},

{
    id:7,
    title:"Dreamer",
    artist:"Luna",
    image:"images/song7.jpg"
},

{
    id:8,
    title:"Night Ride",
    artist:"Ryan",
    image:"images/song8.jpg"
}

];

const songContainer = document.getElementById("songContainer");
const searchInput = document.getElementById("searchInput");

// ===============================
// Display Songs
// ===============================

function displaySongs(songList){

    songContainer.innerHTML = "";

    songList.forEach(song=>{

        songContainer.innerHTML += `

        <div class="song-card">

            <img src="${song.image}" alt="${song.title}">

            <h3>${song.title}</h3>

            <p>${song.artist}</p>

            <button onclick="playSong(${song.id})">

                ▶ Play

            </button>

            <button onclick="likeSong(${song.id})">

                ❤️ Like

            </button>

            <button onclick="addPlaylist(${song.id})">

                ➕ Playlist

            </button>

        </div>

        `;

    });

}

// ===============================
// Search
// ===============================

searchInput.addEventListener("keyup",()=>{

    const value = searchInput.value.toLowerCase();

    const filtered = songs.filter(song=>

        song.title.toLowerCase().includes(value) ||

        song.artist.toLowerCase().includes(value)

    );

    displaySongs(filtered);

});

// ===============================
// Play Song
// ===============================

function playSong(id){

    const song = songs.find(s=>s.id===id);

    alert("Playing : " + song.title);

}

// ===============================
// Like Song
// ===============================

function likeSong(id){

    let likedSongs = JSON.parse(localStorage.getItem("likedSongs")) || [];

    const song = songs.find(s=>s.id===id);

    if(!likedSongs.some(s=>s.id===id)){

        likedSongs.push(song);

        localStorage.setItem("likedSongs",JSON.stringify(likedSongs));

        alert(song.title + " added to Liked Songs");

    }

    else{

        alert("Already in Liked Songs");

    }

}

// ===============================
// Playlist
// ===============================

function addPlaylist(id){

    let playlist = JSON.parse(localStorage.getItem("playlist")) || [];

    const song = songs.find(s=>s.id===id);

    if(!playlist.some(s=>s.id===id)){

        playlist.push(song);

        localStorage.setItem("playlist",JSON.stringify(playlist));

        alert(song.title + " added to Playlist");

    }

    else{

        alert("Song already exists in Playlist");

    }

}

// Initial Load

displaySongs(songs);
