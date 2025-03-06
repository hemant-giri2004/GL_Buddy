// chat.js
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    // Function to add a message to the chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        if (isUser) {
            const userInfo = document.createElement('div');
            userInfo.className = 'user-info';
            userInfo.innerHTML = `
                <span class="user-name">You</span>
                <span class="timestamp">${getCurrentTime()}</span>
            `;
            contentDiv.appendChild(userInfo);
        } else {
            contentDiv.innerHTML = '<h3>GL Buddy</h3>';
        }

        const messageText = document.createElement('div');
        messageText.innerHTML = text;
        contentDiv.appendChild(messageText);

        const logo = document.createElement('img');
        logo.className = 'chat-logo';
        logo.src = isUser ? 'assets/user-avatar.png' : 'assets/logo.png';
        logo.alt = isUser ? 'User Avatar' : 'GL Buddy Logo';

        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(logo);

        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    // Get current time in HH:mm format
    function getCurrentTime() {
        const now = new Date();
        return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    }

    // Scroll to bottom of chat
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle sending message
    function handleSendMessage() {
        const message = userInput.value.trim();
        
        if (message) {
            // Add user message
            addMessage(message, true);
            
            // Clear input
            userInput.value = '';

            // Get bot response
            setTimeout(() => {
                const response = getResponse(message);
                addMessage(response, false);
            }, 500);
        }
    }

    // Event listeners
    sendButton.addEventListener('click', handleSendMessage);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    // Add welcome message when page loads
    addMessage("Hi there! Welcome to GL Buddy! 👋 How can I help you today?", false);
});