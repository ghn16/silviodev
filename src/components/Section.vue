<template>
  <div class="mb-12 fade-in">
    <h2 v-if="title" class="text-2xl font-light mb-6 text-zinc-200">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: null
  }
})
</script>