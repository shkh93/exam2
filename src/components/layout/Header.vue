<template>
  <header class="max-w-[1200px] w-full mx-auto items-center justify-center p-4">
    <div class="flex flex-row items-center justify-between">
      <RouterLink to="/" class="">
        <img class="" src="/public/svg/logo.svg" alt="logo-img" />
      </RouterLink>

      
        <div class="flex flex-row gap-8 text-center">
          
            <p class="">Discover</p>
            <p class="text-white-200 text-bold text-sm">How it work</p>
          
        </div>
      
      <div class="">
        <form action="flex flex-row relative">
          <img src="/public/svg/search.svg " class="absolute" alt="search" />
          <CInput type='text' placeholder="Search" class="relative w-[256px]"
          />
          <!-- <input
            type="text"
            placeholder="Search"
            class="flex relative py-2.5 p-3 border-2 border-[#777E90] w-[256px] bg-[#FCFCFD] rounded-xl :placehoder= 'text-xs font-normal'"
          /> -->
          <img src="/public/svg/search.svg " class="absolute" alt="search" />
        </form>

        
      </div>
      <img src="/public/svg/notification.svg" alt="">
      <div class="flex gap-3">

<CButton class="bg-[#3772FF] rounded-3xl text-white-100 transition duration-300 hover:bg-white hover:text-blue">
  Upload
</CButton>
<CButton class="text-black bg-[#E6E8EC] rounded-3xl">
Connect Wallet
</CButton>
        <!-- <button class="py-3 px-4 text-white  border rounded-3xl bg-[#3772FF]">Upload</button>
        <button class="py-3 px-4 text-black bg-[#E6E8EC] boder rounded-3xl">Connect Wallet</button> -->
      </div>
    </div>
  </header>
</template>

<script setup>
import CInput from '@/components/Base/CInput.vue'
import CButton from '@/components/Base/CButton.vue'
</script>
