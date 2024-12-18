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
            happiness: {
                pattern: /\b(happy|joyful|excited|good|great)\b/i,
                responses: [
                    "That's wonderful! You're {1}?",
                    "I'm glad you're {1}. Tell me more about it."
                ]
            },
            sadness: {
                pattern: /\b(sad|down|unhappy|depressed)\b/i,
                responses: [
                    "I'm sorry you're feeling {1}. Want to talk more?",
                    "You seem {1}. What's going on?"
                ]
            },
            default: {
                responses: [
                    "I'm not quite sure I understand.",
                    "Could you tell me more?"
                ]
            }

        };

    }

    generateResponse(userInput) {

        const text = userInput.trim().toLowerCase();
        if (!text) return "It’s okay to take your time. Let me know when you’re ready.";

        if (this.memory.lastEmotion) {
            return "Tell me more about how you feel.";
        }

        for (const key in this.patterns) {

            const { pattern, responses } = this.patterns[key];
            const match = pattern && text.match(pattern);

            if (match) {
                let response = responses[Math.floor(Math.random() * responses.length)];
                if (key === "happiness" || key === "sadness") {
                    this.memory.lastEmotion = key;
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
        const finalResponse = fallback[Math.floor(Math.random() * fallback.length)];
        this.memory.lastResponse = finalResponse;
        return finalResponse;

    }

}

const eliza = new ElizaBot();

function elizaResponse() {

    const userInputField = document.getElementById("userInput");
    const chatHistory = document.getElementById("chatHistory");
    const userText = userInputField.value.trim();
    if (!userText) return;

    chatHistory.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
    const elizaReply = eliza.generateResponse(userText);
    chatHistory.innerHTML += `<div><strong>Eliza:</strong> ${elizaReply}</div>`;
    userInputField.value = "";
    chatHistory.scrollTop = chatHistory.scrollHeight;

}

document.getElementById("sendButton").onclick = elizaResponse;

document.getElementById("userInput").addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        event.preventDefault();
        elizaResponse();

    }

}

);
