import markdown02 from './markdown-02.md?raw'
import mermaid01 from './mermaid-01.mermaid?raw'

export const testMessages: ChatMessage[] = [
  {
    type: 'text',
    role: 'user',
    content: '帮我写一段ES6的新特性和代码说明？',
  },
  {
    role: 'system',
    type: 'mermaid',
    content: mermaid01,
  },
  {
    role: 'system',
    type: 'markdown',
    content: markdown02,
  },
]
