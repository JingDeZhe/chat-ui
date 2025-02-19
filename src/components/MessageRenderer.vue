<script setup lang="ts">
import { computed, ref } from 'vue'
import { messageModuleMap } from './nodes'
import { ElMessageBox } from 'element-plus'
const props = defineProps<{
  msg: ChatMessage
}>()

const emit = defineEmits<{
  delete: []
}>()

const activeModule = computed(() => messageModuleMap[props.msg.type])
const refContent = ref<HTMLElement>()

function handleMenuClick(menuItem: MessageMenuItem) {
  menuItem.handle(props.msg, refContent.value)
}

function handleDelete() {
  ElMessageBox.confirm('确认删除该节点？')
    .then(() => {
      emit('delete')
    })
    .catch(() => {})
}
</script>

<template>
  <div class="message-renderer" :class="[`role-${msg.role || 'system'}`]">
    <div class="content" ref="refContent">
      <component :is="activeModule.node" :data="msg"></component>
    </div>
    <div class="tools">
      <i class="i-tabler-trash hover:bg-red!" @click="handleDelete" title="删除"></i>
      <i v-for="d in activeModule.menus" :class="d.icon" @click="handleMenuClick(d)" :title="d.title"></i>
    </div>
  </div>
</template>

<style lang="scss"></style>
