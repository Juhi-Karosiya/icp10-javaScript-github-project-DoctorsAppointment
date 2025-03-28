document.getElementById('login-Form').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('Username').value;
    const loginPassword = document.getElementById('Password').value;

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem(loginUsername));

    // Check if the username exists and if the password matches
    if (storedUser && storedUser.password === loginPassword) {
        alert('Login successful!');
        // Redirect to home page or dashboard
        window.location.href = 'login.html';
    } else {
        alert('Invalid username or password.');
    }
});