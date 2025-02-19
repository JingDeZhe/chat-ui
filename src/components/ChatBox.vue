<script setup lang="ts">
import { nextTick, ref } from 'vue'
import MessageRenderer from './MessageRenderer.vue'
import { testMessages } from '../mocks/test-messages'

const messages = ref<ChatMessage[]>(testMessages)
const userInput = ref('')
const refScroll = ref<any>(null)

function insertMessage(msg: ChatMessage) {
  messages.value.push(msg)
  scrollToBottom()
}

function handleSend() {
  insertMessage({
    type: 'text',
    role: 'user',
    content: userInput.value,
  })
  userInput.value = ''
}

function handleEnter(e: MouseEvent) {
  if (e.shiftKey) {
  } else {
    handleSend()
    e.preventDefault()
  }
}

function scrollToBottom() {
  const scrollView = refScroll.value.wrapRef.querySelector('.el-scrollbar__view')
  nextTick(() => {
    refScroll.value.setScrollTop(scrollView.scrollHeight)
  })
}

function handleDelete(i: number) {
  messages.value.splice(i, 1)
}
</script>

<template>
  <div class="chat-box">
    <div class="message-list">
      <el-scrollbar height="100%" ref="refScroll">
        <MessageRenderer v-for="(d, i) in messages" :msg="d" @delete="handleDelete(i)"></MessageRenderer>
      </el-scrollbar>
    </div>
    <div class="message-input">
      <div class="header-tools"></div>
      <div class="input">
        <el-input type="textarea" v-model="userInput" @keyup.enter="handleEnter"></el-input>
      </div>
      <div class="flex justify-end">
        <el-button type="primary" @click="handleSend">发送</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
