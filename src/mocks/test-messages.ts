import markdown01 from './markdown-01.md?raw'

export const testMessages: ChatMessage[] = [
  {
    type: 'text',
    data: {
      content: '这是一个简单的文本消息',
    },
  },
  {
    type: 'markdown',
    data: {
      content: markdown01,
    },
  },
]
