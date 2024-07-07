import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

try {
  const result = await fetch('scrimba-info.txt')
  const text = await result.text()
} catch (err) {
  console.log(err)
}