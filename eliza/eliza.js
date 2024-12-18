class ElizaBot {
    constructor() {
        this.memory = {
            lastEmotion: null,
            lastResponse: null,
            followUpCount: 0
        };
    }

    generateResponse(userInput) {
        const cleanedInput = userInput.trim().toLowerCase();
        if (!cleanedInput) {
            return "It’s okay to take your time. Let me know when you’re ready.";
        }

        const patterns = {
            greeting: {
                pattern: /\b(hello|hi|hey)\b/i,
                responses: [
                    "Hello! How are you feeling today?",
                    "Hi there! What's on your mind?"
                ]
            },
            goodbye: {
                pattern: /\b(bye|goodbye)\b/i,
                responses: [
                    "Goodbye! Take care!",
                    "See you next time!"
                ]
            },
            default: {
                responses: [
                    "I'm not quite sure I understand.",
                    "Could you tell me more about that?"
                ]
            }
        };

        for (const key in patterns) {
            const { pattern, responses } = patterns[key];
            if (pattern && cleanedInput.match(pattern)) {
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }

        return patterns.default.responses[Math.floor(Math.random() * patterns.default.responses.length)];
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
});
