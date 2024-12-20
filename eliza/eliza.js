// ELIZA Chatbot Implementation
class ElizaBot {
    // Memory to track user emotions, responses, and follow-up interactions
    constructor() {
        this.memory = {
             // Tracks last detected emotion from the user
            lastEmotion: null,
            // Tracks last response sent by ELIZA
            lastResponse: null,
            // Tracks number of follow-up responses for a specific emotion
            followUpCount: 0
        };

        // Pattern-matching rules and corresponding responses for ELIZA
        this.patterns = {
            greeting: {
                pattern: /\b(hello|hi|hey)\b/i,
                responses: [
                    "Hello! How are you feeling today?",
                    "Hi there! Tell me how you are feeling.",
                    "Hey! How are you feeling at the moment?",
                    "Hi! How are you feeling today? I'm here to listen."
                ]
            },
            goodbye: {
                pattern: /\b(bye|goodbye|see you|farewell|take care|later|quit|exit)\b/i,
                responses: [
                    "Goodbye! Take care, and remember I'm always here if you need someone to talk to.",
                    "It was nice talking to you. Come back anytime if you need to chat!",
                    "See you later! I’ll be here whenever you need support.",
                    "Take care of yourself! I’m always here if you need to talk."
                ]
            },
            gratitude: {
                pattern: /\b(thanks|thank you)\b/i,
                responses: [
                    "You're welcome! I'm here to help.",
                    "No problem at all! I'm here to support you.",
                    "You're welcome! I'm glad I could be of help.",
                    "You're welcome! I'm always here to listen."
                ]
            },
            happiness: {
                pattern: /\b(happy|joyful|excited|good|great|elated|thrilled)\b/i,
                responses: [
                    "That’s wonderful to hear! What’s has made you feel so {1}?",
                    "I'm delighted to hear you're {1}. What has brought this about?",
                    "That sounds fantastic! Can you tell me about what's making you feel so {1}?",
                    "This is something to celebrate! What has happened to make you feel {1}?"
                ]
            },
            sadness: {
                pattern: /\b(sad|down|unhappy|depressed|upset|miserable)\b/i,
                responses: [
                    "I'm really sorry to hear you're feeling {1}. Can you share why you're feeling this way?",
                    "It’s okay to feel {1}. Can you share what’s been going on?",
                    "That sounds really hard. What’s been making you feel {1}?",
                    "I’m here to listen if you want to talk about why you’re feeling {1}."
                ]
            },
            emotional: {
                pattern: /\b(angry|frustrated|bored|tired|anxious|stressed|lonely|nervous|scared|confused)\b/i,
                responses: [
                    "It’s okay to feel {1}. Can you tell me more about it?",
                    "Why do you feel {1}? Has something happened recently?",
                    "That must be difficult. What is causing you to feel {1}?",
                    "It’s understandable to feel {1} sometimes. Would you like to share why you feel that way?"
                ]
            },
            negativeResponse: {
                pattern: /\b(no|nothing|i don't know|not really)\b/i,
                responses: [
                    "That's okay. It’s alright if you’re not ready to share. Is there anything else I can help with?",
                    "I’m here to listen whenever you’re ready.",
                    "Take your time. You don’t have to talk about it if you don’t want to.",
                    "Sometimes it’s hard to talk about things, and that’s okay."
                ]
            },
            positiveResponse: {
                pattern: /\b(yes|yeah|definitely|absolutely|sure|of course|okay|alright)\b/i,
                responses: [
                    "I'm glad you're willing to share. Can you tell me more about what you are feeling?",
                    "It helps to talk things through. What other feelings would you like to share?",
                    "I appreciate you sharing with me. Can you tell me more about how you're feeling?"
                ]
            },
            unknown: {
                responses: [
                    "I'm not quite sure I understand. Could you tell me how you're feeling?",
                    "I want to help, but I'm having trouble following. Could you share what emotions you're experiencing?",
                    "I'm not sure I caught that. Do you want tell me more about how you're feeling?",
                ]
            }
        
        };
    }

    // Generate a response based on the user input
    generateResponse(userInput) {
        const cleanedInput = userInput.trim().toLowerCase();
        // Handle empty input
        if (cleanedInput === "") {
            return "It's okay to take your time. Let me know when you're ready to share.";
        }
    
        if (this.patterns.gratitude.pattern.test(cleanedInput)) {
            this.memory.lastEmotion = null;
            this.memory.followUpCount = 0;
            return this.selectRandomResponse(this.patterns.gratitude.responses);
        }
        if (this.patterns.goodbye.pattern.test(cleanedInput)) {
            this.memory.lastEmotion = null;
            this.memory.followUpCount = 0;
            return this.selectRandomResponse(this.patterns.goodbye.responses);
        }
        if (this.patterns.negativeResponse.pattern.test(cleanedInput)) {
            this.memory.lastEmotion = null;
            this.memory.followUpCount = 0;
            return this.selectRandomResponse(this.patterns.negativeResponse.responses);
        }

        if (this.patterns.positiveResponse.pattern.test(cleanedInput)) {
            this.memory.lastEmotion = null;
            this.memory.followUpCount = 0;
            return this.selectRandomResponse(this.patterns.positiveResponse.responses);
        }
    
        if (this.memory.lastEmotion) {
            return this.handleEmotionFollowUp(cleanedInput);
        }
    
        // Check for patterns matching emotional states
        for (const key in this.patterns) {
            const { pattern, responses } = this.patterns[key];
            const match = cleanedInput.match(pattern);
            if (match) {
                let response = this.selectRandomResponse(responses);
    
                if (key === "sadness") {
                    this.memory.lastEmotion = "sadness";
                    this.memory.followUpCount = 0;
                    response = response.replace("{1}", match[1]);
                } else if (key === "happiness") {
                    this.memory.lastEmotion = "happiness";
                    this.memory.followUpCount = 0;
                    response = response.replace("{1}", match[1]);
                } else if (key === "emotional") {
                    this.memory.lastEmotion = match[1];
                    this.memory.followUpCount = 0;
                    response = response.replace("{1}", match[1]);
                }
    
                this.memory.lastResponse = response;
                return response;
            }
        }
    
        return this.selectRandomResponse(this.patterns.unknown.responses);
    }

    // Handle follow-up responses based on the user's emotional state
    handleEmotionFollowUp(userInput = '') {
        const cleanedInput = userInput.trim().toLowerCase();
        
        if (this.patterns.gratitude.pattern.test(cleanedInput)) {
            this.memory.lastEmotion = null;
            this.memory.followUpCount = 0;
            return this.selectRandomResponse(this.patterns.gratitude.responses);
        }
        if (this.patterns.goodbye.pattern.test(cleanedInput)) {
            this.memory.lastEmotion = null;
            this.memory.followUpCount = 0;
            return this.selectRandomResponse(this.patterns.goodbye.responses);
        }
        if (this.patterns.negativeResponse.pattern.test(cleanedInput)) {
            this.memory.lastEmotion = null;
            this.memory.followUpCount = 0;
            return this.selectRandomResponse(this.patterns.negativeResponse.responses);
        }

        if (this.patterns.positiveResponse.pattern.test(cleanedInput)) {
            this.memory.lastEmotion = null;
            this.memory.followUpCount = 0;
            return this.selectRandomResponse(this.patterns.positiveResponse.responses);
        }
    
        if (this.memory.lastEmotion === "sadness") {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    "I'm so sorry to hear that. How has this been affecting you?",
                    "That sounds really hard. Can you tell me more about how you're feeling?",
                    "It must be tough to go through this. How have you been coping so far?"
                ]);
            } else if (this.memory.followUpCount === 1) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    "It sounds like you're going through a lot. How are you taking care of yourself?",
                    "It's okay to feel overwhelmed sometimes. What's been helping you manage this?",
                    "That must be very difficult. Is there anything that's brought you comfort during this time?"
                ]);
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return this.selectRandomResponse([
                    "I hope you can feel better soon, can I help you in any other way?",
                    "Just take everything one step at a time, you will feel better eventually, I know it. Are there any other feelings you'd like to share?"
                ]);
            }
        } else if (this.memory.lastEmotion === "happiness") {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    "That's wonderful news! What's been the highlight of it so far?",
                    "It's great to hear you're feeling this way. What else has been going well for you?",
                    "Happiness is precious! Can you tell me more about it?"
                ]);
            } else if (this.memory.followUpCount === 1) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    "I love hearing about positive moments. What's on your mind now?",
                    "That's brillant, has anything else has brought you joy recently?",
                    "Let's keep this positivity going! What else would you like to share that has made you feel good?"
                ]);
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return this.selectRandomResponse([
                    "I'm glad to hear that. Is there any other feelings you'd like to share?",
                    "It's great that you're feeling this way, have you any other feelings you'd like to talk about?",
                ]);
            }
        } else if (this.memory.lastEmotion) {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    `I see. How has feeling ${this.memory.lastEmotion} been affecting you?`,
                    `It's okay to feel ${this.memory.lastEmotion}. Can you share what's been going on?`,
                    `What do you think has been causing you to feel ${this.memory.lastEmotion}?`
                ]);
            } else if (this.memory.followUpCount === 1) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    `That must be challenging. How have you been managing feeling ${this.memory.lastEmotion}?`,
                    `Sometimes feeling ${this.memory.lastEmotion} can be difficult. How are you coping with it?`,
                    `It's okay to talk about feeling ${this.memory.lastEmotion}. What's been helping you through this?`
                ]);
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return this.selectRandomResponse([
                    "It's okay to share what's on your mind. Is there any other feelings you'd like to discuss?",
                    "Just take things one step at a time, that will help you maange all this. Has there been anything else on your mind recently?"
                ]);
            }
        } else {
            return this.selectRandomResponse([
                "I see. How has this been affecting you?",
                "What do you think led to this?",
                "That sounds difficult. What's been the hardest part for you?"
            ]);
        }
    }

    // Select a random response from a list of possible responses
    selectRandomResponse(responses) {
        let response;
        do {
            response = responses[Math.floor(Math.random() * responses.length)];
        } while (responses.length > 1 && response === this.memory.lastResponse);
        return response;
    }
}

// Initialize ELIZA chatbot
const eliza = new ElizaBot();

// Add a welcome message on page load
document.addEventListener("DOMContentLoaded", () => {
    const chatHistory = document.getElementById("chatHistory");
    
    // Add welcome message to the chat history
    if (chatHistory) {
        chatHistory.innerHTML += `<div class="message eliza-message">
            Hi, I'm ELIZA. I'm here to listen and help you process your thoughts. Just type how you're feeling or say hello to start!
            <span class="timestamp">${getTimestamp()}</span>
        </div>`;
    } else {
        console.error("chatHistory element not found!");
    }
});

// Handle user input and generate ELIZA's response
function elizaResponse() {
    const userInput = document.getElementById("userInput");
    const chatHistory = document.getElementById("chatHistory");
    const typingIndicator = document.getElementById("typingIndicator");

    // Get user input and clear the input field
    const inputText = userInput.value.trim();
    if (inputText === "") return;

    // Add user message to the chat history
    chatHistory.innerHTML += `<div class="message user-message">${inputText}<span class="timestamp">${getTimestamp()}</span></div>`;
    userInput.value = "";
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Show typing indicator and generate ELIZA's response
    typingIndicator.classList.add("visible");

    // Generate ELIZA's response after a delay to simulate typing
    setTimeout(() => {
        const elizaReply = eliza.generateResponse(inputText);
        typingIndicator.classList.remove("visible");
        chatHistory.innerHTML += `<div class="message eliza-message">${elizaReply}<span class="timestamp">${getTimestamp()}</span></div>`;
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 1000);
}

// Handle user input when the send button is clicked or Enter key is pressed
document.getElementById("sendButton").onclick = elizaResponse;
document.getElementById("userInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        elizaResponse();
    }
});

// Get the current time in HH:MM format
function getTimestamp() {
    const now = new Date();
    return now.getHours() + ":" + String(now.getMinutes()).padStart(2, "0");
}
