<template>
  
  <div class="">
    
    <input
      v-model="model"
      autocomplete="nope"
      :type    
      :placeholder
      class="w-full h-full flex relative py-2.5 p-3 border-2 border-[#777E90]  bg-[#FCFCFD] rounded-xl :placehoder= 'text-xs font-normal"
    />
    <slot></slot>
  </div>
  
 
  
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  placeholder: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: 'text',
  },
  
 
})

const inputValue = ref()
</script>
