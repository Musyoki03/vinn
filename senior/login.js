function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    alert(`Logging in with\nUsername: ${username}\nPassword: ${password}`);
        // Dummy validation for example purposes
     if (username === 'user' && password === 'password') {
         alert('Login successful');
            window.location.href = 'home.html'; // Redirect to home page
     } else {
            alert('Invalid username or password');
        }
    }

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value;
    alert(`Registering with\nUsername: ${username}\nPassword: ${password}\nEmail: ${email}`);
}
