import { ChatOpenAI } from "langchain/chat_models/openai"
import { PromptTemplate } from "langchain/prompts"
import { StringOutputParser } from 'langchain/schema/output_parser'
import { retriever } from '/utils/retriever'

throw new Error("Pause execution!")

document.addEventListener('submit', (e) => {
    e.preventDefault()
    progressConversation()
})

const openAIApiKey = process.env.OPENAI_API_KEY

const embeddings = new OpenAIEmbeddings({ openAIApiKey })
const llm = new ChatOpenAI({ openAIApiKey })

const standaloneQuestionTemplate = 'Given a question, convert it to a standalone question. question: {question} standalone question:'

const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate)

const chain = standaloneQuestionPrompt.pipe(llm).pipe(new StringOutputParser())
.pipe(retriever)

// Await the response when you INVOKE the chain. 
// Remember to pass in a question.
const response = await chain.invoke({ 
    question: 'What are the technical requirements for running Scrimba? I only have a very old laptop which is not that powerful.'
     })
     

console.log(response)

async function progressConversation() {
    const userInput = document.getElementById('user-input')
    const chatbotConversation = document.getElementById('chatbot-conversation-container')
    const question = userInput.value
    userInput.value = ''

    // add human message
    const newHumanSpeechBubble = document.createElement('div')
    newHumanSpeechBubble.classList.add('speech', 'speech-human')
    chatbotConversation.appendChild(newHumanSpeechBubble)
    newHumanSpeechBubble.textContent = question
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight

    // add AI message
    const newAiSpeechBubble = document.createElement('div')
    newAiSpeechBubble.classList.add('speech', 'speech-ai')
    chatbotConversation.appendChild(newAiSpeechBubble)
    newAiSpeechBubble.textContent = result
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight
}