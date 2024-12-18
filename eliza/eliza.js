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
                    "Hi there! How are you?"
                ]
            },
            goodbye: {
                pattern: /\b(bye|goodbye)\b/i,
                responses: [
                    "Goodbye! Take care!",
                    "See you next time!"
                ]
            },
            gratitude: {
                pattern: /\b(thanks|thank you)\b/i,
                responses: [
                    "You're welcome! I'm here to help.",
                    "No problem! Glad to be of assistance."
                ]
            },
            happiness: {
                pattern: /\b(happy|joyful|excited|great)\b/i,
                responses: [
                    "That's wonderful! You're {1}?",
                    "Glad to hear you're {1}. Tell me more."
                ]
            },
            sadness: {
                pattern: /\b(sad|down|unhappy|depressed)\b/i,
                responses: [
                    "I'm sorry you're {1}. Want to talk more?",
                    "You seem {1}. What's going on?"
                ]
            },
            emotional: {
                pattern: /\b(angry|frustrated|bored|tired|anxious|stressed|lonely|nervous|scared|confused)\b/i,
                responses: [
                    "It’s okay to feel {1}. Can you tell me more?",
                    "Why do you feel {1}? Has something happened recently?",
                    "I’m here to listen if you want to talk about feeling {1}."
                ]
            },
            closedResponse: {
                pattern: /\b(no|nothing|not really|i don't know)\b/i,
                responses: [
                    "That's okay. If you're not ready to share, that's fine.",
                    "I’m here whenever you want to talk."
                ]
            },
            default: {
                responses: [
                    "I'm not quite sure I understand.",
                    "Could you tell me more about that?"
                ]
            }
        };
    }

    generateResponse(userInput) {
        const text = userInput.trim().toLowerCase();
        if (!text) return "Take your time.";

        if (this.memory.lastEmotion) {
            return this.handleEmotionFollowUp();
        }

        for (const key in this.patterns) {
            const { pattern, responses } = this.patterns[key];
            const match = pattern && text.match(pattern);
            if (match) {
                let response = this.selectRandomResponse(responses);
                if (key === "happiness" || key === "sadness" || key === "emotional") {
                    this.memory.lastEmotion = (key === "emotional") ? match[1] : key;
                    this.memory.followUpCount = 0;
                    if (match[1]) {
                        response = response.replace("{1}", match[1]);
                    }
                }
                this.memory.lastResponse = response;
                return response;
            }
        }

        const fallback = this.patterns.default.responses;
        const final = this.selectRandomResponse(fallback);
        this.memory.lastResponse = final;
        return final;
    }

    handleEmotionFollowUp() {
        if (this.memory.lastEmotion === "sadness") {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    "What's been making you feel sad lately?",
                    "Has anything helped you cope?"
                ]);
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return "It's okay to feel sad sometimes. Anything else on your mind?";
            }
        } else if (this.memory.lastEmotion === "happiness") {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return this.selectRandomResponse([
                    "That's wonderful! What's the highlight of your day?",
                    "Anything else that's made you happy recently?"
                ]);
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return "I'm glad you're feeling good. Anything else you'd like to share?";
            }
        } else {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return "Tell me more about how you've been feeling.";
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return "It's okay to share whatever is on your mind. Anything else?";
            }
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
    if (!inputText) return;

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
