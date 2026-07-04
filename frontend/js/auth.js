// =============================
// Melody Authentication
// =============================

// Change this when backend is ready
const API_URL = "http://localhost:5000/api";

// Login Form
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {

            alert("Please fill all fields.");

            return;

        }

        try {

            const response = await fetch(`${API_URL}/login`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    email,
                    password

                })

            });

            const data = await response.json();

            if (!response.ok) {

                alert(data.message || "Invalid Email or Password");

                return;

            }

            // Save User Details

            localStorage.setItem("token", data.token);

            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Login Successful!");

            window.location.href = "index.html";

        }

        catch (error) {

            console.error(error);

            alert("Server not running.");

        }

    });

}

// =============================
// Logout Function
// =============================

function logout() {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "login.html";

}

// =============================
// Check Login
// =============================

function checkLogin() {

    const token = localStorage.getItem("token");

    if (!token) {

        window.location.href = "login.html";

    }

}

// =============================
// Display User Name
// =============================

function loadUser() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    const profileName = document.getElementById("profileName");

    if (profileName) {

        profileName.innerHTML = user.username;

    }

}

// =============================
// Auto Run
// =============================

loadUser();
