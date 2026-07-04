// =====================================
// Melody - Liked Songs
// =====================================

const likedContainer = document.getElementById("likedContainer");
const clearLikedBtn = document.getElementById("clearLiked");

// Load Liked Songs
function loadLikedSongs() {

    const likedSongs =
        JSON.parse(localStorage.getItem("likedSongs")) || [];

    likedContainer.innerHTML = "";

    if (likedSongs.length === 0) {

        likedContainer.innerHTML = `
            <div class="empty">

                <i class="fa-solid fa-heart-crack"></i>

                <h2>No Liked Songs</h2>

                <p>Like your favorite songs from the Search page.</p>

            </div>
        `;

        return;
    }

    likedSongs.forEach(song => {

        likedContainer.innerHTML += `

        <div class="song-card">

            <img src="${song.image}" alt="${song.title}">

            <h3>${song.title}</h3>

            <p>${song.artist}</p>

            <button onclick="removeLiked(${song.id})">

                Remove

            </button>

        </div>

        `;

    });

}

// Remove One Song
function removeLiked(id) {

    let likedSongs =
        JSON.parse(localStorage.getItem("likedSongs")) || [];

    likedSongs = likedSongs.filter(song => song.id !== id);

    localStorage.setItem(
        "likedSongs",
        JSON.stringify(likedSongs)
    );

    loadLikedSongs();

}

// Clear All
clearLikedBtn.addEventListener("click", () => {

    const confirmDelete = confirm(
        "Clear all liked songs?"
    );

    if (confirmDelete) {

        localStorage.removeItem("likedSongs");

        loadLikedSongs();

    }

});

// Initial Load
loadLikedSongs();
