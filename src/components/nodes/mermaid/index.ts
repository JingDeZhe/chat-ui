import { downloadSvgAsImage } from '../utils'
import MermaidNode from './MermaidNode.vue'
import { dayjs } from 'element-plus'

export const mermaidModule: MessageModule = {
  node: MermaidNode,
  menus: [
    {
      name: 'exportImage',
      title: '保存为图片',
      icon: 'i-tabler-photo-down',
      handle(message, el) {
        const svgEl = el?.querySelector('svg')
        svgEl && downloadSvgAsImage(svgEl, `Mermaid-${dayjs(new Date()).format('YYYY-MM-DD_HH:mm:ss')}`)
      },
    },
  ],
}
