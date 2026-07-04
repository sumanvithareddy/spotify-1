// ==========================================
// Melody Playlist
// ==========================================

const playlistContainer = document.getElementById("playlistContainer");
const clearPlaylistBtn = document.getElementById("clearPlaylist");

// Load Playlist
function loadPlaylist() {

    const playlist =
        JSON.parse(localStorage.getItem("playlist")) || [];

    playlistContainer.innerHTML = "";

    if (playlist.length === 0) {

        playlistContainer.innerHTML = `
            <div class="empty">
                <i class="fa-solid fa-music"></i>
                <h2>Your Playlist is Empty</h2>
                <p>Add songs from the Search page.</p>
            </div>
        `;

        return;
    }

    playlist.forEach(song => {

        playlistContainer.innerHTML += `
        
        <div class="song-card">

            <img src="${song.image}" alt="${song.title}">

            <h3>${song.title}</h3>

            <p>${song.artist}</p>

            <button onclick="removeSong(${song.id})">

                Remove

            </button>

        </div>

        `;

    });

}

// Remove One Song
function removeSong(id) {

    let playlist =
        JSON.parse(localStorage.getItem("playlist")) || [];

    playlist = playlist.filter(song => song.id !== id);

    localStorage.setItem(
        "playlist",
        JSON.stringify(playlist)
    );

    loadPlaylist();

}

// Clear Playlist
clearPlaylistBtn.addEventListener("click", () => {

    if (confirm("Are you sure you want to clear your playlist?")) {

        localStorage.removeItem("playlist");

        loadPlaylist();

    }

});

// Load Playlist When Page Opens
loadPlaylist();
