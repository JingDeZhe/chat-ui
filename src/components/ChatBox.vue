<script setup lang="ts">
import { ref } from 'vue'
import MessageRenderer from './MessageRenderer.vue'
import { testMessages } from '../mocks/test-messages'

const messages = ref<ChatMessage[]>(testMessages)

function handleSend() {}
</script>

<template>
  <div class="chat-box">
    <div class="message-list">
      <el-scrollbar height="100%">
        <MessageRenderer v-for="d in messages" :info="d"></MessageRenderer>
      </el-scrollbar>
    </div>
    <div class="message-input">
      <div class="header-tools"></div>
      <div class="input">
        <el-input type="textarea"></el-input>
      </div>
      <div class="flex justify-end">
        <el-button type="primary" @click="handleSend">发送</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
