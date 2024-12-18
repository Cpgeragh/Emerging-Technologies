// ELIZA Chatbot Implementation
class ElizaBot {
    constructor() {
        this.memory = {
            lastEmotion: null,
            lastResponse: null,
            followUpCount: 0
        };

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
                    "That’s wonderful to hear! What’s been bringing you joy?",
                    "I'm glad to hear you're {1}. What’s been the highlight of your day?",
                    "That sounds fantastic! Can you tell me more about what's making you feel {1}?",
                    "Happiness is something to celebrate! What’s been the best part of it?"
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
                    "I’m here to listen if you want to talk about feeling {1}.",
                    "That must be difficult. What do you think is causing you to feel {1}?",
                    "It’s understandable to feel {1} sometimes. Would you like to share more?"
                ]
            },
            closedResponse: {
                pattern: /\b(no|nothing|i don't know|not really)\b/i,
                responses: [
                    "That's okay. It’s alright if you’re not ready to share. Is there anything else I can help with?",
                    "I’m here to listen whenever you’re ready.",
                    "Take your time. You don’t have to talk about it if you don’t want to.",
                    "Sometimes it’s hard to talk about things, and that’s okay."
                ]
            },
            default: {
                responses: [
                    "That must have been challenging. Can you tell me more?",
                    "I see. How has this been affecting you?",
                    "It sounds like there’s a lot on your mind. What do you think led to this?",
                    "I’d like to hear more about how you’re feeling.",
                    "How are you coping with this situation?",
                    "That sounds difficult. What’s been the hardest part for you?"
                ]
            }
        };
    }

    generateResponse(userInput) {
        const cleanedInput = userInput.trim().toLowerCase();
        if (cleanedInput === "") {
            return "It’s okay to take your time. Let me know when you’re ready to share.";
        }

        if (this.memory.lastEmotion) {
            return this.handleEmotionFollowUp();
        }

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

        return this.selectRandomResponse(this.patterns.default.responses);
    }

    handleEmotionFollowUp() {
        if (this.memory.lastEmotion === "sadness") {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    "I see. How has this been affecting you?",
                    "That sounds really hard. Can you tell me more about how you’re feeling?",
                    "It must be tough to go through this. How have you been coping so far?"
                ]);
            } else if (this.memory.followUpCount === 1) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    "It sounds like you’re going through a lot. How are you taking care of yourself?",
                    "It’s okay to feel overwhelmed sometimes. What’s been helping you manage this?",
                    "That must be very difficult. Is there anything that’s brought you comfort during this time?"
                ]);
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return this.selectRandomResponse([
                    "It’s okay to feel sad sometimes. What’s on your mind now?",
                    "Let’s take this one step at a time. Is there something else you’d like to talk about?"
                ]);
            }
        } else if (this.memory.lastEmotion === "happiness") {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    "That’s wonderful! What’s been the highlight of your day?",
                    "It’s great to hear you’re feeling this way. What else has been going well for you?",
                    "Happiness is precious! Can you tell me more about it?"
                ]);
            } else if (this.memory.followUpCount === 1) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    "I love hearing about positive moments. What’s on your mind now?",
                    "What else has brought you joy recently?",
                    "Let’s keep this positivity going! What else would you like to share?"
                ]);
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return this.selectRandomResponse([
                    "I’m glad to hear that. Is there anything else you’d like to share?",
                    "It’s great that you’re feeling this way. What else is on your mind?"
                ]);
            }
        } else if (this.memory.lastEmotion) {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    `I see. How has feeling ${this.memory.lastEmotion} been affecting you?`,
                    `It’s okay to feel ${this.memory.lastEmotion}. Can you share what’s been going on?`,
                    `What do you think has been causing you to feel ${this.memory.lastEmotion}?`
                ]);
            } else if (this.memory.followUpCount === 1) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    `That must be challenging. How have you been managing feeling ${this.memory.lastEmotion}?`,
                    `Sometimes feeling ${this.memory.lastEmotion} can be difficult. How are you coping with it?`,
                    `It’s okay to talk about feeling ${this.memory.lastEmotion}. What’s been helping you through this?`
                ]);
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return this.selectRandomResponse([
                    "It’s okay to share what’s on your mind. Is there anything else you’d like to discuss?",
                    "Let’s take things one step at a time. What’s been on your mind recently?"
                ]);
            }
        } else {
            return this.selectRandomResponse([
                "I see. How has this been affecting you?",
                "What do you think led to this?",
                "That sounds difficult. What’s been the hardest part for you?"
            ]);
        }
    }

    selectRandomResponse(responses) {
        let response;
        do {
            response = responses[Math.floor(Math.random() * responses.length)];
        } while (responses.length > 1 && response === this.memory.lastResponse);
        return response;
    }
}

const eliza = new ElizaBot();

function elizaResponse() {
    const userInput = document.getElementById("userInput");
    const chatHistory = document.getElementById("chatHistory");
    const typingIndicator = document.getElementById("typingIndicator");

    const inputText = userInput.value.trim();
    if (inputText === "") return;

    chatHistory.innerHTML += `<div class="message user-message">${inputText}<span class="timestamp">${getTimestamp()}</span></div>`;
    userInput.value = "";
    chatHistory.scrollTop = chatHistory.scrollHeight;

    typingIndicator.classList.add("visible");

    setTimeout(() => {
        const elizaReply = eliza.generateResponse(inputText);
        typingIndicator.classList.remove("visible");
        chatHistory.innerHTML += `<div class="message eliza-message">${elizaReply}<span class="timestamp">${getTimestamp()}</span></div>`;
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }, 1000);
}

document.getElementById("sendButton").onclick = elizaResponse;
document.getElementById("userInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        elizaResponse();
    }
});

function getTimestamp() {
    const now = new Date();
    return now.getHours() + ":" + String(now.getMinutes()).padStart(2, "0");
}
