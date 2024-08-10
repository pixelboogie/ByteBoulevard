# ByteBoulevard

## Description
**ByteBoulevard** is an advanced chatbot designed to provide highly relevant and precise responses based on specialized knowledge provided in an information document. This project leverages cutting-edge technologies such as embeddings, vector stores, prompt creation, chaining, and the `pipe()` method to develop a sophisticated conversational agent.

The chatbot is capable of understanding complex queries, retrieving relevant information, and delivering accurate responses, thanks to the seamless integration of modern AI tools and effective data handling techniques.

## Features
- **Specialized Knowledge Integration**: The chatbot is powered by a document containing specialized knowledge, making it highly relevant in specific domains.
- **Embeddings and Vector Storage**: Utilizes OpenAI's embeddings model to convert document chunks into vector representations, which are then stored in a vector store hosted on Supabase.
- **LangChain Splitter**: Splits the document into manageable chunks for efficient processing.
- **Prompt Chaining with `.pipe()`**: Templates and prompts are chained using the `.pipe()` method to ensure a smooth flow of operations.
- **Contextual Responses**: Maintains conversation history to generate contextually accurate answers.
- **Efficient Retrieval and Response Generation**: Uses vectorized queries to retrieve the most relevant information chunks from the vector store, ensuring precise and relevant responses.

## Installation

### Prerequisites
- Python 3.7 or higher
- OpenAI API key
- Supabase account and API key

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/ByteBoulevard.git
   cd ByteBoulevard


2. **Install Required Libraries:**

    Install the necessary Python packages:

        pip install -r requirements.txt

3. **Set Up Environment Variables:**

    Create a .env file in the project root directory and add your OpenAI and Supabase API keys:

        OPENAI_API_KEY=your_openai_api_key_here
        SUPABASE_URL=your_supabase_url_here
        SUPABASE_KEY=your_supabase_key_here

4. **Prepare the Knowledge Document:**

    Provide a text file containing the specialized knowledge you want the chatbot to use. This document will be split into chunks and vectorized for efficient retrieval.

5. **Initialize the Vector Store:**

- Use the OpenAI embeddings model to convert the document chunks into vectors.
- Store these vectors in the Supabase vector store for quick retrieval during user interactions.

## Usage

1. Run the Application:

    Start the chatbot by running the main script:

        python main.py

2. Interact with the Chatbot:

    - Enter your question in the provided interface.
    - The chatbot will process your query, retrieve relevant information from the vector store, and generate a response based on the conversation context.


## Example Code

Here’s an example of how the vector creation and retrieval process is handled:

    from langchain.vectorstores import SupabaseVectorStore
    from openai.embeddings import create_embeddings

    # Split the document into chunks
    chunks = Splitter.split(document)

    # Create vectors for each chunk using OpenAI's embeddings model
    vectors = [create_embeddings(chunk) for chunk in chunks]

    # Store the vectors in Supabase
    vector_store = SupabaseVectorStore(url=SUPABASE_URL, key=SUPABASE_KEY)
    vector_store.add_vectors(vectors)

    # Retrieve the most relevant chunks during a user query
    retrieved_chunks = vector_store.search(user_query_vector)


## License
This project is licensed under the MIT License. See the LICENSE file for more information.
