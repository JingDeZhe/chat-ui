<script setup lang="ts">
import Shiki from '@shikijs/markdown-it'
import MermaidPlugin from './plugins/mermaid'
import markdownit from 'markdown-it'
import { ref, watch } from 'vue'
const md = markdownit()

const props = defineProps<{
  data: any
}>()

const htmlText = ref('')

let isPluginLoaded = false
const renderMarkdown = async (text: string) => {
  if (!isPluginLoaded) {
    console.log('加载Shiki插件')
    md.use(MermaidPlugin)
    md.use(
      await Shiki({
        defaultColor: 'dark',
        themes: {
          light: 'vitesse-light',
          dark: 'one-dark-pro',
        },
        langs: ['javascript', 'typescript', 'sql', 'java', 'html', 'vue', 'mermaid'],
      })
    )
    isPluginLoaded = true
  }
  htmlText.value = md.render(text)
}

watch(
  () => props.data,
  (value: any) => {
    const { content } = value
    renderMarkdown(content)
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <div class="markdown-node" v-html="htmlText"></div>
</template>

<style lang="scss">
.shiki {
  --at-apply: p-2 rounded overflow-auto;
}
</style>
