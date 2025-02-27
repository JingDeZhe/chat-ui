<script setup lang="ts">
import { nextTick, ref } from 'vue'
import MessageRenderer from './MessageRenderer.vue'
import { testMessages } from '../mocks/test-messages'
import { ElMessage } from 'element-plus'
import { chatWithAi } from '../utils'
import LoadingPlaceholder from './LoadingPlaceholder.vue'

const messages = ref<ChatMessage[]>(testMessages)
const userInput = ref('')
const refScroll = ref<any>(null)
const waiting = ref(false)

function insertMessage(msg: ChatMessage) {
  messages.value.push(msg)
  scrollToBottom()
}

function handleSend() {
  const value = userInput.value.trim()
  if (!value) {
    ElMessage.info('不能发送空内容')
    userInput.value = ''
    return
  }
  insertMessage({
    type: 'text',
    role: 'user',
    content: userInput.value,
  })
  waiting.value = true
  chatWithAi(messages.value.slice(-3))
    .then((d) => {
      insertMessage(d)
    })
    .catch((err) => {
      ElMessage.error(err)
    })
    .finally(() => {
      waiting.value = false
    })
  userInput.value = ''
}

function handleEnter(e: KeyboardEvent | Event) {
  if ((e as KeyboardEvent).shiftKey) {
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
        <MessageRenderer
          v-for="(d, i) in messages"
          :msg="d"
          @delete="handleDelete(i)"
          @content-loaded="scrollToBottom"
        ></MessageRenderer>
        <div v-if="waiting" class="text-gray flex items-center gap-1 m-2">
          <span>思考中</span>
          <el-icon size="16">
            <LoadingPlaceholder></LoadingPlaceholder>
          </el-icon>
        </div>
      </el-scrollbar>
    </div>
    <div class="message-input">
      <div class="header-tools"></div>
      <div class="input">
        <el-input type="textarea" v-model="userInput" resize="none" :rows="3" @keydown.enter="handleEnter"></el-input>
      </div>
      <div class="flex justify-end">
        <el-button type="primary" @click="handleSend">发送</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
