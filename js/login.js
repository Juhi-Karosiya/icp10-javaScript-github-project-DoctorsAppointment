localStorage.setItem("username", "testuser");
localStorage.setItem("password", "password123");

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the entered values from the form
    let enteredUsername = document.getElementById("login-username").value;
    let enteredPassword = document.getElementById("login-password").value;

    // Get the stored values from localStorage
    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    // Compare entered values with stored values
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard or another page
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
