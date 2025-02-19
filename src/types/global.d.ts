type ChatMessage = {
  type?: string
  role?: 'user' | 'system'
  content: string
}

type MessageMenuItem = {
  name: string
  title: string
  icon: string
  handle: (msg: ChatMessage, el?: HTMLElement) => void
}

type MessageModule = {
  node: import('vue').Component
  menus: MessageMenuItem[]
}
