// script.js

// Main UserStorage Controller
const UserStorage = {
    // Initialize storage if not exists
    init() {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }
    },

    // Get all users
    getAllUsers() {
        return JSON.parse(localStorage.getItem('users') || '[]');
    },

    // Add new user
    addUser(userData) {
        const users = this.getAllUsers();
        
        // Check if email already exists
        if (users.some(user => user.email === userData.email)) {
            return {
                success: false,
                message: 'Email already registered'
            };
        }

        // Add user with timestamp
        users.push({
            ...userData,
            id: Date.now().toString(),
            registeredAt: new Date().toISOString()
        });

        localStorage.setItem('users', JSON.stringify(users));
        return {
            success: true,
            message: 'Registration successful'
        };
    },

    // Verify login
    verifyUser(email, password) {
        const users = this.getAllUsers();
        const user = users.find(user => user.email === email && user.password === password);
        
        return user ? {
            success: true,
            user: { ...user, password: undefined } // Remove password from response
        } : {
            success: false,
            message: 'Invalid email or password'
        };
    },

    // Update password
    updatePassword(email, newPassword) {
        const users = this.getAllUsers();
        const userIndex = users.findIndex(user => user.email === email);

        if (userIndex === -1) {
            return {
                success: false,
                message: 'User not found'
            };
        }

        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        
        return {
            success: true,
            message: 'Password updated successfully'
        };
    }
};

// Validation Rules
const ValidationRules = {
    name: {
        pattern: /^[A-Za-z\s]{3,30}$/,
        message: 'Name should be 3-30 characters long and contain only letters'
    },
    email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    password: {
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: 'Password must be at least 8 characters long and include uppercase, lowercase, number and special character'
    }
};

// Form Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Initialize storage
    UserStorage.init();

    // Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Validate inputs
            if (!validateField(email, 'email') || !validateField(password, 'password')) {
                return;
            }

            // Attempt login
            const result = UserStorage.verifyUser(email, password);
            if (result.success) {
                // Store current user in session
                sessionStorage.setItem('currentUser', JSON.stringify(result.user));
                window.location.href = 'chat.html';
            } else {
                showError(document.getElementById('email'), result.message);
            }
        });
    }

    // Registration Form Handler
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Validate all fields
            if (!validateField(name, 'name') || 
                !validateField(email, 'email') || 
                !validateField(password, 'password')) {
                return;
            }

            // Attempt registration
            const result = UserStorage.addUser({ name, email, password });
            if (result.success) {
                alert(result.message);
                window.location.href = 'index.html';
            } else {
                showError(document.getElementById('email'), result.message);
            }
        });
    }

    // Forgot Password Form Handler
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const newPassword = document.getElementById('password').value;

            // Validate inputs
            if (!validateField(email, 'email') || !validateField(newPassword, 'password')) {
                return;
            }

            // Attempt password update
            const result = UserStorage.updatePassword(email, newPassword);
            if (result.success) {
                alert(result.message);
                window.location.href = 'index.html';
            } else {
                showError(document.getElementById('email'), result.message);
            }
        });
    }

    // Setup real-time validation for all forms
    setupFormValidation();
});

// Validation Functions
function validateField(value, fieldName) {
    const rule = ValidationRules[fieldName];
    if (!rule) return true;

    return rule.pattern.test(value);
}

function showError(input, message) {
    const errorDiv = input.parentElement.querySelector('.error-message') 
        || createErrorElement(input.parentElement);
    errorDiv.textContent = message;
    input.classList.add('error-input');
}

function clearError(input) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.textContent = '';
    }
    input.classList.remove('error-input');
}

function createErrorElement(parent) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    parent.appendChild(errorDiv);
    return errorDiv;
}

// Setup real-time form validation
function setupFormValidation() {
    document.querySelectorAll('input').forEach(input => {
        const fieldName = input.id;
        if (ValidationRules[fieldName]) {
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    if (!validateField(this.value, fieldName)) {
                        showError(this, ValidationRules[fieldName].message);
                    } else {
                        clearError(this);
                    }
                } else {
                    clearError(this);
                }
            });
        }
    });
}

// Utility function to view stored users (for testing)
function viewStoredUsers() {
    console.table(UserStorage.getAllUsers());
}