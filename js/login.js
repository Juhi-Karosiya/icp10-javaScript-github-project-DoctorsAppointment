document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Simple validation for empty fields
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
    } else {
        // Simulate a successful login (you can replace this with an actual validation)
        if (username === "user" && password === "password123") {
            errorMessage.textContent = "";
            alert("Login successful!");
            // Redirect to another page or do something else after successful login
        } else {
            errorMessage.textContent = "Invalid username or password!";
        }
    }
});
