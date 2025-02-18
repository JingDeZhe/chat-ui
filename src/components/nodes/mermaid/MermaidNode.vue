<script setup lang="ts">
import { ref, watch } from 'vue'
import mermaid from 'mermaid'
import { nanoid } from 'nanoid'

const props = defineProps<{
  data: any
}>()

const svgText = ref('')
const svgId = `mermaid-svg-${nanoid()}`

watch(
  () => props.data,
  (value: any) => {
    const { content } = value
    mermaid.render(svgId, content).then((d) => {
      svgText.value = d.svg
    })
  },
  { immediate: true }
)
</script>

<template>
  <div class="mermaid-node" v-html="svgText"></div>
</template>

<style lang="scss"></style>
