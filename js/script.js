// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Form Handling Functions
    function handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically validate with a server
        console.log('Login attempt:', { email, password });
        
        // Redirect to chat page after successful login
        window.location.href = 'chat.html';
    }

    function handleRegistration(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!name || !email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send data to a server
        console.log('Registration attempt:', { name, email, password });
        
        // Redirect to login page after successful registration
        window.location.href = 'index.html';
    }

    function handleForgotPassword(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!name || !email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send reset request to server
        console.log('Password reset attempt:', { name, email, password });
        
        // Redirect to login page after password reset
        window.location.href = 'index.html';
    }

    // Form Event Listeners
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    // Login Form
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Registration Form
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegistration);
    }

    // Forgot Password Form
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    }

    // Chat Page Logout
    const logoutButton = document.querySelector('.nav-links a[href="index.html"]');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            // Here you would typically handle logout logic
            console.log('User logged out');
        });
    }

    // Basic Form Validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        // Minimum 6 characters
        return password.length >= 6;
    }

    // Input Event Listeners for Real-time Validation
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const passwordInputs = document.querySelectorAll('input[type="password"]');

    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!validateEmail(this.value)) {
                this.style.borderColor = 'red';
                // You could show an error message here
            } else {
                this.style.borderColor = '';
            }
        });
    });

    passwordInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (!validatePassword(this.value)) {
                this.style.borderColor = 'red';
                // You could show an error message here
            } else {
                this.style.borderColor = '';
            }
        });
    });

    // Clear form fields on page load
    function clearFormFields() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => form.reset());
    }

    // Call clear fields function on page load
    clearFormFields();

    // Prevent form resubmission on page refresh
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
});