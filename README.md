# **Third-Order Letter Approximation Model & ELIZA Chatbot**

## Table of Contents

- [Project Overview](#project-overview)
- [History](#history)
  - [Trigram Models](#trigram-models)
  - [ELIZA Chatbot](#eliza-chatbot)
- [Features](#features)
  - [Third-Order Letter Approximation Model](#third-order-letter-approximation-model)
  - [ELIZA Chatbot](#eliza-chatbot)
- [Installation](#installation)
  - [Third-Order Letter Approximation Model](#third-order-letter-approximation-model-1)
  - [ELIZA Chatbot](#eliza-chatbot-1)
- [Deployment](#deployment)
  - [Third-Order Letter Approximation Model](#third-order-letter-approximation-model-2)
  - [ELIZA Chatbot](#eliza-chatbot-2)
- [Expected Outputs and Demonstration](#expected-outputs-and-demonstration)
  - [Third-Order Letter Approximation Model](#third-order-letter-approximation-model-3)
  - [ELIZA Chatbot](#eliza-chatbot-3)
- [Development Difficulties](#development-difficulties)
  - [Third-Order Letter Approximation Model](#third-order-letter-approximation-model-4)
  - [ELIZA Chatbot](#eliza-chatbot-4)
- [Testing](#testing)
  - [Third-Order Letter Approximation Model Examples](#third-order-letter-approximation-model-examples)
  - [ELIZA Chatbot](#eliza-chatbot-5)
- [Bibliography](#bibliography)


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

- Github Issues will be used to plan out my work and track my progress. (https://github.com/Cpgeragh/Emerging-Technologies/issues)


## **History**

### **Trigram Models**

- Trigram Models are statistical language models used to predict the probability of a sequence of three consecutive characters based on the preceding two. These models are part of n-gram models, which have been foundational in natural language processing (NLP)[4].
- Claude Shannon’s groundbreaking work, A Mathematical Theory of Communication (1948), introduced foundational concepts in information theory. His ideas about using probabilistic models to predict sequences in communication paved the way for statistical language models, including trigrams[10].
- Probabilistic Approach: Trigram models use the function of the probability of a token depends only on the two preceding tokens, simplifying calculations and making them suitable for real-world applications[4].
- Applications in AI: Before neural network-based approaches became the norm, trigram models were standard in language modeling, significantly influencing the development of modern NLP tools like predictive text keyboards.
- Trigram models represent a simpler yet powerful method for understanding sequential patterns in text. They serve as a gateway to more advanced statistical and machine learning models.

### **ELIZA Chatbot[1]**
- ELIZA was one of the first chatbots ever created, developed by Joseph Weizenbaum in 1966 at the Massachusetts Institute of Technology (MIT). It simulated a psychotherapist, responding to user inputs with questions and reflections.
- Early Development: ELIZA used simple pattern-matching techniques and substitution rules to analyze and respond to user text.This allowed it to give the illusion of understanding.
- Impact: Weizenbaum created ELIZA partly to demonstrate the superficiality of human-computer interactions. However, many users found the bot compelling, sparking debates about the ethics of AI in personal and emotional situations.
- Legacy: ELIZA laid the groundwork for modern chatbots and conversational AI[7].

## **Features**

### **Third-Order Letter Approximation Model**

- Text Cleaning: Accesses a Gutenburg text and returns a cleaned version of it which only contains uppercase letters, single spaces, and periods[5].
- Trigram Model: This is gerenrated by counting each sequence of three characters in the cleaned test, a count of each unique trigram is then kept in a dictionary.
- Text Generation: Using an initial seed of "TH", a new text is produced using trigram-based probabilities[6].
- Text Analysis: New Text is analysed to see what percentage of it contains recognisable English words.
- Trigram Model Export: Model is saved as a JSON file for future reuse.

### **ELIZA Chatbot**
- Setup to discuss a person's feelings and why they are feeling that way.
- Recognises emotion from messages and responds appropriately and empathetically.
- Uses Regex for pattern matching responses[3].
- Memory system, randomised responses and a typing indicator are used to try to simulate a human responder.
- Deployed on Github Pages so it can be used from any browser[8].

## **Installation**

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

## **Deployment**

### **Third-Order Letter Approximation Model**

- Execute each cell in order using ctrl + return.
- This will build the trigram model, generate the new text, analayse the real word count percentage , and export the model as trigrams.json.

### **ELIZA Chatbot**

- Deploy the chatbot locally: python -m http.server 5500.
- Open http://localhost:5500/eliza/ to access the chat.

#### Alternatively

- Access via Github Spaces: https://cpgeragh.github.io/Emerging-Technologies/

## **Expected Outputs and Demonstration**

### **Third-Order Letter Approximation Model**

- This is an example of the Trigram model working, we can see the texts being cleaned, the new text being generated, the Trigrams being extracted and then the real word analysis being completed. 

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <img src="images/CleanedText.jpg" alt="Cleaned Text Screenshot" width="1000"> 
    <img src="images/GeneratedText.jpg" alt="Generated Text Screenshot" width="1000">
    <img src="images/ExtractedTrigrams.jpg" alt="Extracted Trigrams and Count Screenshot" width="300">
    <img src="images/LoadedWordList.jpg" alt="Words List Loaded Successfully Screenshot" width="1000">
    <img src="images/TrigramPercentageAnalysis.jpg" alt="Valid English Words Percentage Screenshot" width="1000">
</div>


### **ELIZA Chatbot**

#### ELIZA in Action

- This is an example of a user interacting with the ELIZA chatbot on the web interface. It shows the responsive nature of the bot and the UI details that make the bot seem more human-like.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <img src="images/Chat1.jpg" alt="ELIZA Chatbot Screenshot" width="300"> 
    <img src="images/Chat2.jpg" alt="ELIZA Chatbot Screenshot" width="300">
    <img src="images/Chat3.jpg" alt="ELIZA Chatbot Screenshot" width="300">
    <img src="images/Chat4.jpg" alt="ELIZA Chatbot Screenshot" width="300">
</div>

## **Development Difficulties**

- Challenges and solutions were documented and managed using GitHub Issues. This helped ensure that progress was tracked and that all identified issues were addressed.

### **Third-Order Letter Approximation Model**

#### Highlights
- Ensuring the text cleaning process handled all edge cases and unexpected input.
- Optimizing the word percentage analysis to efficiently process large datasets.

#### Handling Edge Cases in Text Cleaning[5]

- Challenge: The input texts contained special characters and non-ASCII symbols, making the cleaning process complex.
- Solution: A rigorous text cleaning function was implemented to filter out unwanted characters and normalize the text. This ensured that the model processed consistent and usable input.
- Reflection: Fine-tuning the cleaning patterns required a lot of testing, as it had to be certain that important characters like spaces and periods were retained while other elements weren't missed unexpectadly.

#### Valid Word Percentage Analysis

- Challenge: Determining the percentage of valid English words in the generated text required loading and processing a large word list efficiently.
- Solution: A set-based lookup was implemented for the word list, which improved the performance of the comparison step. Additionally, tests were added to ensure the accuracy of the word list and checking for any duplicate words in it that might throw off valid word counts.
- Reflection: The importance of optimizing operations when working with large datasets is clear to see and very nescessary.

### **ELIZA Chatbot**

#### Highlights
- Balancing simplicity in the rule-based chatbot logic with realistic conversational responses.
- Enhancing user experience with features like a typing indicator and memory tracking.

#### Balancing Simplicity and Realism[3]

- Challenge: ELIZA relies on simple rule-based logic using regular expressions, but achieving realistic and engaging conversations with such a system was difficult.
- Solution: A memory system was developed that tracked the user's last emotion and allowed follow-up responses to feel more personalized and human-like. Randomized responses also added variety to conversations, reducing the feeling of repetitiveness.
- Reflection: While ELIZA is not a true AI, small enhancements like memory and follow-ups made it much more engaging.

#### Emotion Detection and Ambiguity[3]

- Challenge: Users often input ambiguous or multi-emotion messages which made it hard to determine the correct response.
- Solution: Responses to address the most prominent emotions in a message were prioritised. For ambiguous inputs, fallback responses were added to encourage users to clarify or share more.
- Reflection: This required refining the regex patterns and adding fallback logic.

#### User Experience Enhancements

- Challenge: Making the chatbot feel human-like required features such as a typing indicator and natural response delays.
- Solution: A visible typing indicator and a 1-second delay before responses was added, simulating a human responder.
- Reflection: Small improvements had a good impact on the chatbot’s realism, showing how important design details are for user engagement.

## **Testing**

### **Third-Order Letter Approximation Model Examples**

- The testing images in this section demonstrate key stages and validations in the development of the Third-Order Letter Approximation Model.

- Cleaned Text Storage Confirmation: Verifies that files are stored correctly in the cleaned_texts directory and are ready to have Trigrams extracted from them.

- Trigram Model Generation: Displays the extracted trigram counts from the cleaned text. This also shows how the model identifies and counts unique sequences of three characters.

- Generated Text Analysis: Presents generated text derived from the trigram model. This shows how the output text is analyzed to determine the percentage of valid English words.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <img src="images/TrigramsTest1.jpg" alt="Trigrams Model Screenshot" width="300"> 
    <img src="images/TrigramsTest2.jpg" alt="Trigrams Model Screenshot" width="300">
    <img src="images/TrigramsTest3.jpg" alt="Trigrams Model Screenshot" width="300">
</div>


### **ELIZA Chatbot**

The images under this section showcase some issues encountered when building and testing ELIZA.

- Image 1: At this stage, the chatbot was not equipped to handle user input case insensitivity effectively. As seen, the input “hello” and “Hello” yielded inconsistent behavior. This lead to making chnages to normalize all text for better matching.

- Image 2: The chatbot generated grammatically awkward responses because improper concatenation of response fragments and insufficient contextual matching during sentence generation. Refining the sentence assembly logic fixed this issue.

- Image 3: The chatbot incorrectly kept redirecting to responses related to sadness, even when the user's inputs shifted to a neutral or positive tone. This was due to incomplete logic in detecting and updating the user’s emotional state during the conversation.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <img src="images/ElizaEvolution4.jpg" alt="ELIZA Chatbot Screenshot" width="300"> 
    <img src="images/ElizaEvolution1.png" alt="ELIZA Chatbot Screenshot" width="300">
    <img src="images/ElizaEvolution2.png" alt="ELIZA Chatbot Screenshot" width="300">
</div>

## **Acknowledgments**
This project benefited from the assistance of OpenAI's ChatGPT for debugging and clsrification purposes[9], as well as GitHub Copilot for code suggestions and development support [11].

## **References**

1. Weizenbaum, J. (1966). ELIZA—a computer program for the study of natural language communication between man and machine. *Communications of the ACM*, 9(1), 36–45. [Link to Article](https://dl.acm.org/doi/10.1145/365153.365168)

2. Project Gutenberg. (n.d.). Free eBooks - Project Gutenberg. [Link to Project Gutenberg](https://www.gutenberg.org/)

3. Jurafsky, D., & Martin, J. H. (2024). *Speech and Language Processing*. Chapter 2: Regular Expressions, Tokenization, Edit Distance. Stanford University. [Link to Document](https://web.stanford.edu/~jurafsky/slp3/2.pdf)

4. Jurafsky, D., & Martin, J. H. (2024). *Speech and Language Processing*. Chapter 3: N-gram Language Models. Stanford University. [Link to Document](https://web.stanford.edu/~jurafsky/slp3/3.pdf)

5. GeeksforGeeks. (2024). How to remove all Non-ASCII characters from the string using JavaScript? *GeeksforGeeks.* [Link to Article](https://www.geeksforgeeks.org/how-to-remove-all-non-ascii-characters-from-the-string-using-javascript/)

6. Programming in Python. (n.d.). Trigrams – Simple Text Manipulation. *UW PCE Python Programming Certificate.* Retrieved from [Link to Article](https://uwpce-pythoncert.github.io/ProgrammingInPython/exercises/trigrams/trigrams.html)

7. Springer Nature Link. (2024). Exploring the Future Development of Artificial Intelligence (AI) Applications in Chatbots: A Bibliometric Analysis. [Link to Document](https://link.springer.com/article/10.1007/s12369-022-00956-0)

8. GitHub. (2024). GitHub Pages Documentation. Learn how to create a website directly from a repository on GitHub. [Link to Article](https://docs.github.com/en/pages)

9. OpenAI. (2024). ChatGPT [Large language model]. [Link to Documentation](https://platform.openai.com/docs/concepts)

10. Shannon, C. E. (1948). A Mathematical Theory of Communication. Bell Telephone Laboratories. [Link to Document](https://www.scribd.com/document/373986823/Claude-Shannon-A-Mathematical-Theory-of-Communications-1948)

11. GitHub Copilot. (2024). AI-powered code completion and suggestion tool. GitHub. [Link to Documentation](https://github.com/features/copilot)

