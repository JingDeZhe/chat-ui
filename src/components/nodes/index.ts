import type { Component } from 'vue'
import MarkdownNode from './markdown/MarkdownNode.vue'
import TextNode from './TextNode.vue'
import MermaidNode from './mermaid/MermaidNode.vue'

export const messageNodeMap: Record<string, Component> = {
  markdown: MarkdownNode,
  text: TextNode,
  mermaid: MermaidNode,
}
