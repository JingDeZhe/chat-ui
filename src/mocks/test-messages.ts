import markdown01 from './markdown-01.md?raw'
import markdown02 from './markdown-02.md?raw'
import mermaid01 from './mermaid-01.mermaid?raw'

export const testMessages: ChatMessage[] = [
  {
    type: 'text',
    role: 'user',
    content: '这是一个简单的文本消息。',
  },
  {
    type: 'mermaid',
    content: mermaid01,
  },
  {
    type: 'markdown',
    content: markdown02,
  },
]
