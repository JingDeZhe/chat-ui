<script setup lang="ts">
import { messageNodeMap } from './nodes'
const props = defineProps<{
  info: ChatMessage
}>()
</script>

<template>
  <div class="message-renderer" :class="[`role-${info.role || 'system'}`]">
    <component :is="messageNodeMap[info.type]" :data="info"></component>
  </div>
</template>

<style lang="scss">
.message-renderer {
  --at-apply: mx-1;
  &.role-user {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
