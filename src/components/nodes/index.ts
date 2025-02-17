import type { Component } from 'vue'
import MarkdownNode from './markdown/MarkdownNode.vue'

export const messageNodeMap: Record<string, Component> = {
  markdown: MarkdownNode,
}
