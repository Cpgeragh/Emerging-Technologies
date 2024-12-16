const responses ={
    "hello": "Hello! How can I help you today?",
    "goodbye": "Goodbye! Have a great day!",
    "how are you": "I'm doing well, thank you for asking.",
    "default": "I'm sorry, I don't understand what you're asking.",
    
    "i feel sad": "I'm really sorry to hear that. Do you want to talk about what's making you feel this way?",
    "i need help": "Of course, I'm here to listen. What do you need help with?",
    "i am stressed": "Stress can be tough to handle. What's been on your mind lately?",
    "i feel happy": "That's great to hear! What’s making you feel so happy?",
    "i feel lonely": "I'm sorry to hear that. Talking about it might help. What's been on your mind?",
    "default": "I'm sorry, I don't understand what you're asking."
};

function getElizaResponse(userInput) {

    const Input = userInput.trim().toLowerCase();

    if(responses[Input]) {

        return responses[Input];

    } else {

        return responses["default"];

    }

}

function elizaResponse() {
    
        const userInput = document.getElementById("userInput").value;
        const chatHistory = document.getElementById("chatHistory");

        if (userInput) {

            chatHistory.innerHTML += `<div><strong>You:</strong> ${userInput}</div>`;

            const elizaReply = getElizaResponse(userInput);

            chatHistory.innerHTML += `<div><strong>Eliza:</strong> ${elizaReply}</div>`;

            document.getElementById("userInput").value = "";

            chatHistory.scrollTop = chatHistory.scrollHeight
        }
    
    }