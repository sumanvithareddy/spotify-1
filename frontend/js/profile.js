// ===========================================
// Melody - Profile Page
// ===========================================

// User Details
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const playlistCount = document.getElementById("playlistCount");
const likedCount = document.getElementById("likedCount");
const logoutBtn = document.getElementById("logoutBtn");

// =============================
// Load User
// =============================

function loadProfile() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        profileName.textContent = user.username || "Melody User";

        profileEmail.textContent = user.email || "user@email.com";

    } else {

        profileName.textContent = "Guest User";

        profileEmail.textContent = "guest@melody.com";

    }

    // Playlist Count

    const playlist =
        JSON.parse(localStorage.getItem("playlist")) || [];

    playlistCount.textContent = playlist.length;

    // Liked Songs Count

    const likedSongs =
        JSON.parse(localStorage.getItem("likedSongs")) || [];

    likedCount.textContent = likedSongs.length;

}

// =============================
// Logout
// =============================

logoutBtn.addEventListener("click", () => {

    const confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "login.html";

});

// =============================
// Page Load
// =============================

document.addEventListener("DOMContentLoaded", loadProfile);
