import { ElMessage } from 'element-plus'
import { copyTextToClipboard, PRINT_FLAG } from '../utils'
import MarkdownNode from './MarkdownNode.vue'

export const markdownModule: MessageModule = {
  node: MarkdownNode,
  menus: [
    {
      name: 'copy',
      title: '复制为Markdown',
      icon: 'i-tabler-copy',
      handle(message) {
        copyTextToClipboard(message.content)
        ElMessage.success('已复制')
      },
    },
  ],
}
