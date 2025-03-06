/* chat.js */
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    
    // Verify elements are found
    console.log('Elements found:', {
        chatMessages: !!chatMessages,
        userInput: !!userInput,
        sendButton: !!sendButton
    });
    
    Collapse
    // Function to append a message to the chat
    function addMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ' + className;
    
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
    
        // If user message add user info; else add chatbot title
        if (className === 'user-message') {
            const userInfoDiv = document.createElement('div');
            userInfoDiv.className = 'user-info';
            userInfoDiv.innerHTML = `<span class="user-name">You</span> <span class="timestamp">${getCurrentTime()}</span>`;
            contentDiv.appendChild(userInfoDiv);
        } else {
            contentDiv.innerHTML = '<h3>GL Buddy</h3>';
        }
    
        // Add message text (allow HTML)
        const messageTextDiv = document.createElement('div');
        messageTextDiv.innerHTML = text;
        contentDiv.appendChild(messageTextDiv);
    
        // Create and add the logo image
        const logo = document.createElement('img');
        logo.className = 'chat-logo';
        // Use user avatar for user messages, otherwise use logo.png
        logo.src = className === 'user-message' ? 'assets/user-avatar.png' : 'assets/logo.png';
        logo.alt = className === 'user-message' ? 'User Avatar' : 'GL Buddy Logo';
    
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
    
    // Scroll chat messages to bottom
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Handle sending user input
    function handleUserInput() {
        const text = userInput.value.trim();
        if (!text) return;
        addMessage(text, 'user-message');
        userInput.value = '';
    
        // Get chatbot response from chatResponses.js (getResponse must be globally available)
        const reply = getResponse(text);
        // Simulate a short delay for a natural feel
        setTimeout(() => {
            addMessage(reply, 'bot-message');
        }, 500);
    }
    
    // Event listeners for Send button and Enter key
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
    
    // Optionally, add an initial welcome message
    addMessage("Hi there! Welcome to GL Buddy! 👋<br>" + getResponse("How are you?"), "bot-message");
    
    // Add this at the end of your chat.js file
    function testChat() {
        console.log('Testing chat functionality...');
        
        // Test conversation map
        console.log('Conversation map:', conversationMap);
        
        // Test response function
        const testInput = 'Hi';
        console.log('Testing input:', testInput);
        const response = getResponse(testInput);
        console.log('Response:', response);
        
        // Test message display
        addBotMessage('Test message from bot', false);
    }
    
    // Call test function when page loads
    testChat();
});