class ElizaBot {

    constructor() {

        this.memory = {
            lastEmotion: null,
            lastResponse: null,
            followUpCount: 0
        };

        this.patterns = {
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
                    "I'm sorry you're {1}. Want to talk about it?",
                    "You seem {1}. What's going on?"
                ]
            },
            default: {
                responses: [
                    "I'm not sure I understand.",
                    "Could you tell me more?"
                ]
            }

        };

    }

    generateResponse(userInput) {

        const text = userInput.trim().toLowerCase();
        if (!text) return "It’s okay to take your time.";

        if (this.memory.lastEmotion) {
            return this.handleEmotionFollowUp();
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
        const final = fallback[Math.floor(Math.random() * fallback.length)];
        this.memory.lastResponse = final;
        return final;

    }

    handleEmotionFollowUp() {
        if (this.memory.lastEmotion === "sadness") {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return "What's been making you feel sad lately?";
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return "It's okay to feel sad sometimes. Anything else on your mind?";
            }
        } else if (this.memory.lastEmotion === "happiness") {
            if (this.memory.followUpCount === 0) {
                this.memory.followUpCount++;
                return "That's wonderful! What's the highlight of your day?";
            } else {
                this.memory.lastEmotion = null;
                this.memory.followUpCount = 0;
                return "I'm glad you're feeling good. Anything else you'd like to share?";
            }
        }
        return "Tell me more.";
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
