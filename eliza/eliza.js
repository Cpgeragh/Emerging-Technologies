const responses ={
    "hello": [
        "Hello! How can I help you today?",
        "Hi there! What's on your mind?",
        "Hey! How can I assist you today?",
        "Hi! What would you like to talk about?"
    ],

   "goodbye": [
        "Goodbye! Have a great day!",
        "Take care and see you soon!",
        "Bye for now! I'm here if you need me.",
        "Farewell! Don't hesitate to come back if you want to talk."
    ],

    "how are you": [
        "I'm doing well, thank you for asking!",
        "I'm feeling great today. How about you?",
        "I’m doing fine, ready to chat with you.",
        "I’m here and ready to listen. How are you feeling?"
    ],
    
    "i feel sad": [
        "I'm sorry to hear that. Do you want to talk about what's making you feel this way?",
        "That sounds tough. What happened to make you feel this way?",
        "I'm here to listen. Do you want to share what's on your mind?",
        "It's okay to feel sad sometimes. Want to talk about it?"
    ],

    "i need help": [
        "Of course, I'm here to listen. What do you need help with?",
        "I'm always here for you. Tell me, how can I assist you?",
        "I’m glad you reached out. What can I do to support you?",
        "Sure, let's figure this out together. What do you need help with?",
        "I’m here to help. Can you tell me a bit more about what’s going on?"
    ],

     "i am stressed": [
        "Stress can be tough to handle. What's been on your mind lately?",
        "I'm sorry to hear that. Do you want to talk about what's stressing you out?",
        "It sounds like a lot is happening. What’s been weighing on you?",
        "Stress can feel overwhelming. What’s the biggest concern for you right now?",
        "Let’s work through it together. What’s been causing your stress?"
    ],

    "i feel happy": [
        "That's great to hear! What’s making you feel so happy?",
        "I’m glad to hear that! What’s brought you so much joy today?",
        "Happiness is contagious! Tell me more about what’s making you smile.",
        "It’s wonderful that you’re feeling happy. What happened to brighten your day?",
        "I love hearing good news! What’s the reason behind your happiness?"
    ],

    "i feel lonely": [
        "I'm sorry to hear that. Talking about it might help. What's been on your mind?",
        "Feeling lonely can be tough. Do you want to share what’s making you feel this way?",
        "I’m here for you. Sometimes talking can make you feel less alone.",
        "It’s okay to feel this way. What’s been going on in your life lately?",
        "You’re not alone. I’m here to listen whenever you want to talk."
    ],

    "default": [
        "I'm sorry, I don't understand what you're asking.",
        "Could you rephrase that? I’m not sure I understand.",
        "Hmm, I’m not sure I follow. Can you clarify?",
        "I’m here to listen, but I didn’t quite get that. Can you try again?"
    ]
};

function getElizaResponse(userInput) {

    const Input = userInput.trim().toLowerCase();

    if(responses[Input]) {

        const possibleResponses = responses[Input];
        return responses[Input][Math.floor(Math.random() * possibleResponses.length)];

    } else {

       const defaultResponses = responses["default"];
       return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];

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