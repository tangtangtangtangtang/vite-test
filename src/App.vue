<script setup lang="ts">
import { h } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

h(HelloWorld, {
  "on-go-task": () => {}
})
</script>

<template>
  <HelloWorld
    @btn-more-click="() => {}"
    @btn-click="() => {}"
  />
</template>

<style scoped>
</style>
