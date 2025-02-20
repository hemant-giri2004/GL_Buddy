// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get form element
    const loginForm = document.getElementById('loginForm');
    
    // Add form submit event listener
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get input values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        console.log('Login attempt:', { email, password });
    });

    // Get link elements
    const createAccountLink = document.getElementById('createAccount');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    
    // Add click event listeners for links
    createAccountLink.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Navigate to create account page');
        // Add your navigation logic here
    });
    
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Navigate to forgot password page');
        // Add your navigation logic here
    });
});