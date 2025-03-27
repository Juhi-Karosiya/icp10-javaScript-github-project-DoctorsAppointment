// Example of user credentials for demo purposes
const users = [
    { username: 'doctor', password: 'password123' },
    { username: 'nurse', password: 'nursepass' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Store the username in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'dashboard.html'; // Redirect to a dashboard page after successful login
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});
