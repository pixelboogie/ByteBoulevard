# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```
Head over to https://vitejs.dev/ to learn more about configuring vite

## About Project 
In this project, we leverage advanced technologies and techniques such as embeddings, vector stores, prompt creation, chaining, and the pipe() method to develop a sophisticated chatbot. 

Data Preparation:

We start by providing a document, in this case, a text file containing specialized knowledge for the chatbot.
The document is passed to a Splitter, a LangChain tool, which divides the document into manageable chunks.
Vector Creation and Storage:

We use an embeddings model from OpenAI to convert each chunk into vector representations.
These vectors are then stored in a vector store hosted on Supabase for efficient retrieval.
Application Build:

Templates and prompts are set up to structure the chatbot's responses.
We chain these templates and prompts using the .pipe() method, ensuring a seamless flow of operations.
User Interaction:

When a user enters a question, it is stored in a conversation history.
An OpenAI model transforms the question into a concise, standalone query.
The question is vectorized using OpenAI's embeddings model.
Retrieval and Response Generation:

The vectorized question is sent to the Supabase vector store to retrieve the most relevant chunks.
An OpenAI model then uses the original question, the retrieved chunks, and the conversation history to generate a final answer.
The RunnableSequence class is employed to build and manage these processing chains.
Response Handling:

The generated response is saved in the conversation history.
The response is rendered back to the user, providing a coherent and contextually accurate answer.
