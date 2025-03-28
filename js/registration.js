document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username && password) {
      // Create a user object
      let user = {
          username: username,
          password: password
      };

      // Save the user credentials as a JSON string in localStorage
      localStorage.setItem("user", JSON.stringify(user));

      alert("Registration successful!");
      window.location.href = "login.html"; // Redirect to login page
  } else {
      alert("Please fill in both fields.");
  }
});

