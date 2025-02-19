import { Canvg } from 'canvg'
import { ElMessage } from 'element-plus'
import { saveAs } from 'file-saver'

export const PRINT_FLAG = 'print-area'

export function formatMessage(arg: string | Object, config: string | Object = 'text') {
  const data = typeof arg === 'string' ? { content: arg } : arg
  const rendererConfig = typeof config === 'string' ? { type: config } : config
  return {
    ...rendererConfig,
    data,
  }
}

export function copyTextToClipboard(text: string, { target = document.body }: { target?: HTMLElement } = {}): boolean {
  if (typeof text !== 'string') {
    throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`)
  }

  const element = document.createElement('textarea')
  const previouslyFocusedElement = document.activeElement as HTMLElement | null

  element.value = text
  element.setAttribute('readonly', '')
  element.style.contain = 'strict'
  element.style.position = 'absolute'
  element.style.left = '-9999px'
  element.style.fontSize = '12pt'

  const selection = document.getSelection()
  const originalRange = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null

  target.append(element)
  element.select()
  element.selectionStart = 0
  element.selectionEnd = text.length

  let isSuccess = false
  try {
    isSuccess = document.execCommand('copy')
  } catch {}

  element.remove()

  if (originalRange && selection) {
    selection.removeAllRanges()
    selection.addRange(originalRange)
  }

  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus()
  }

  return isSuccess
}

export async function downloadSvgAsImage(svgElement: SVGElement, filename: string) {
  const svgString = new XMLSerializer().serializeToString(svgElement)
  const canvas = document.createElement('canvas')
  const dpr = window.devicePixelRatio || 1
  canvas.width = svgElement.clientWidth * dpr
  canvas.height = svgElement.clientHeight * dpr
  const ctx = canvas.getContext('2d')!
  ctx.scale(dpr, dpr) // 关键缩放配置

  const v = await Canvg.from(ctx, svgString)
  await v.render({
    enableRedraw: true,
    ignoreDimensions: false,
    ignoreClear: true,
  })

  canvas.toBlob((b) => {
    saveAs(b!, `${filename}.png`)
    ElMessage.success('下载成功')
  })
}
