<template>
  <button
    class="py-3 px-4  border flex  items-center justify-center"
   
  >
    
    <slot />
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    default: '',
  },
 
})
</script>

