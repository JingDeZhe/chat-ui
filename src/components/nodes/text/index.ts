import { ElMessage } from 'element-plus'
import { copyTextToClipboard } from '../utils'
import TextNode from './TextNode.vue'

export const textModule: MessageModule = {
  node: TextNode,
  menus: [
    {
      name: 'copy',
      title: '复制',
      icon: 'i-tabler-copy',
      handle(message) {
        copyTextToClipboard(message.content)
        ElMessage.success('已复制')
      },
    },
  ],
}
