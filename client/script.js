// script.js

// Backend API ka URL (agar backend aur frontend same machine pe hain)
const API_URL = "http://localhost:3000/api/register";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Input fields ka data lete hain
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (!username || !password) {
      alert("Please fill in both username and password");
      return;
    }

    try {
      // API call
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // "User registered successfully"
        form.reset();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to server");
    }
  });
});
