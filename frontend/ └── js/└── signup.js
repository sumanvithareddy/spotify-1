// ========================================
// Melody - Signup
// ========================================

const API_URL = "http://localhost:5000/api";

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const username = document.getElementById("username").value.trim();

        const email = document.getElementById("email").value.trim();

        const password = document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        // Validation

        if (
            username === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            alert("Please fill in all fields.");

            return;

        }

        if (password.length < 6) {

            alert("Password must be at least 6 characters.");

            return;

        }

        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }

        try {

            const response = await fetch(`${API_URL}/signup`, {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    username,
                    email,
                    password

                })

            });

            const data = await response.json();

            if (!response.ok) {

                alert(data.message || "Registration failed.");

                return;

            }

            alert("Account created successfully!");

            window.location.href = "login.html";

        }

        catch (error) {

            console.error(error);

            alert("Unable to connect to the server.");

        }

    });

}
