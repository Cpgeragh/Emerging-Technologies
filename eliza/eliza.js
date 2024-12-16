const responses ={
    "hello": "Hello! How can I help you today?",
    "goodbye": "Goodbye! Have a great day!",
    "how are you": "I'm doing well, thank you for asking.",
    "default": "I'm sorry, I don't understand what you're asking.",
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