# **Third-Order Letter Approximation Model & ELIZA Chatbot**

## **Project Overview**

This project is made up of two main code sections:

- **Third-Order Letter Approximation Model**
    - Analyses trigram patterns in English texts.
    - Attempts to generate sentences that are grammatically realistic.
    - This allows us to understand how simple statistical models can identify and predict common sequences in language.
    - This is very interesting learn about, espceially for more advanced uses like in AI text generation.
  
- **ELIZA Chatbot**
    - Engages in empathetic, conversational interactions with users.
    - Responds based on user inputs using pattern matching.
    - This allows us to demonstrate how pattern matching and rule-based logic can help simulate meaningful, human-like conversations.
    - It is very interesting to learn about AI's role in real-world applications like real-time communication and mental health support.

## **Features**

### **Third-Order Letter Approximation Model**

- Text Cleaning: Accesses a Gutenburg text and returns a cleaned version of it which only contains uppercase letters, single spaces, and periods.
- Trigram Model: This is gerenrated by counting each sequence of three characters in the cleaned test, a count of each unique trigram is then kept in a dictionary.
- Text Generation: Using an initial seed of "TH", a new text is produced using trigram-based probabilities.
- Text Analysis: New Text is analysed to see what percentage of it contains recognisable English words.
- Trigram Model Export: Model is saved as a JSON file for future reuse.

### **ELIZA Chatbot**
- Setup to discuss a person's feelings and why they are feeling that way.
- Recognises emotion from messages and responds appropriately and empathetically.
- Uses Regex for pattern matching responses.
- Memory system, randomised responses and a typing indicator are used to try to simulate a human responder.
- Deployed on Github Pages so it can be used from any browser.

## **Installation and Deployment**

### **Third-Order Letter Approximation Model**

- Clone repository: git clone https://github.com/Cpgeragh/Emerging-Technologies.git.
- Open in Visual Studio Code.
- Install latest verison of python.
- Install required libraries: pip install -r requirements.txt.
- Copy texts you want to process into data/ directory.

### **ELIZA Chatbot**

- Clone repository: git clone https://github.com/Cpgeragh/Emerging-Technologies.git.
- Open in Visual Studio Code.
- Install latest verison of python.

## **How to Use**

### **Third-Order Letter Approximation Model**

- Execute each cell in order using ctrl + return.
- This will build the trigram model, generate the new text, analayse the real word count percentage , and export the model as trigrams.json.

### **ELIZA Chatbot**

- Deploy the chatbot locally: python -m http.server 5500.
- Open http://localhost:5500/eliza/ to access the chat.

#### Alternatively

- Access via Github Spaces: https://cpgeragh.github.io/Emerging-Technologies/


## **Development**

### **Third-Order Letter Approximation Model**

### **ELIZA Chatbot**



## **Outputs**

