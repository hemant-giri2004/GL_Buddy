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


// |\  |   __
// | \ |  |_   |  |
// |  \|  |__  |/\|


// Registration form handling
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!name || !email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        console.log('Registration attempt:', { name, email, password });
    });
}

// |\  |   __
// | \ |  |_   |  |
// |  \|  |__  |/\|

// Forgot Password form handling
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!name || !email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        console.log('Password reset attempt:', { name, email, password });
    });
}