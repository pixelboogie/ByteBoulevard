import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { createClient } from '@supabase/supabase-js'
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'

// @supabase/supabase-js
try {
  const result = await fetch('scrimba-info.txt')
  const text = await result.text()
  
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
    separators: ['\n\n', '\n', ' ', ''] // default setting
  })
  
  const output = await splitter.createDocuments([text])
  
    const sbApiKey = process.env.SUPABASE_API_KEY
    const sbUrl = process.env.SUPABASE_URL_LC_CHATBOT
    const openAIApiKey = process.env.OPENAI_API_KEY
    
    const client = createClient(sbUrl, sbApiKey)
    
    await SupabaseVectorStore.fromDocuments(
        output,
        new OpenAIEmbeddings({ openAIApiKey }),
        {
            client,
            tableName: 'documents',
        }
    )
} catch (err) {
  console.log(err)
}