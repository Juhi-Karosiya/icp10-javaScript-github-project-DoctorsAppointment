document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let enteredUsername = document.getElementById("login-username").value;
    let enteredPassword = document.getElementById("login-password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to a dashboard or another page
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
