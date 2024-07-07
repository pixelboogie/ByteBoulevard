import { ChatOpenAI } from "langchain/chat_models/openai"
import { PromptTemplate } from "langchain/prompts"

// throw new Error("Pause execution!")

document.addEventListener('submit', (e) => {
    e.preventDefault()
    progressConversation()
})

const openAIApiKey = process.env.OPENAI_API_KEY
const llm = new ChatOpenAI({ openAIApiKey })


// A string holding the phrasing of the prompt
const standaloneQuestionTemplate = 'Given a question, convert it to a standalone question. question: {question} standalone question:'

// A prompt created using PromptTemplate and the fromTemplate method
const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate)

// Take the standaloneQuestionPrompt and PIPE the model
const standaloneQuestionChain = standaloneQuestionPrompt.pipe(llm)

// Await the response when you INVOKE the chain. 
// Remember to pass in a question.
const response = await standaloneQuestionChain.invoke({ 
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