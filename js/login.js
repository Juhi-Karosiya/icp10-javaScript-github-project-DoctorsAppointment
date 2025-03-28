document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
  
    if (username && password) {
        // Create a user object
        let user = {
            username:  login-username,
            password: login-password
        };
  
        // Save the user credentials as a JSON string in localStorage
        localStorage.setItem("user", JSON.stringify(user));
  
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to login page
    } else {
        alert("Please fill in both fields.");
    }
  });
  