document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username && password) {
      // Save user credentials in local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      alert("Registration successful!");
      window.location.href = "login.html"; // Redirect to login page
  } else {
      alert("Please fill in both fields.");
  }
});
