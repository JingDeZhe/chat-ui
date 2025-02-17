<script setup lang="ts">
import { messageNodeMap } from './nodes'
const props = defineProps<{
  info: ChatMessage
}>()
</script>

<template>
  <div class="message-renderer">
    <component :is="messageNodeMap[info.type]" :data="info.data"></component>
  </div>
</template>

<style lang="scss"></style>
