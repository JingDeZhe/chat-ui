<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<template>
  <div class="text-node">{{ data.content }}</div>
</template>

<style lang="scss">
.text-node {
  --at-apply: whitespace-pre-wrap;
}

.role-user {
  .text-node {
    --at-apply: bg-neutral-100 p-2 rounded;
  }
}
</style>
