<template>
  <div class="max-w-[1120px] w-full mx-auto items-center bg-white-50 mt-[80px] mb-[48px]">
    <div class="flex flex-row items-center justify-between">
      <RouterLink to="/" class="">
        <img class="" src="/public/svg/logo.svg" alt="logo-img" />
      </RouterLink>

      <p class="text-bold text-base">Crypter.</p>
      <p class="text-bold text-base">Info</p>
      <p class="text-bold text-base">Join Newsletter</p>
    </div>
    <div class="flex flex-row justify-between">
      <h4>The New Creative Economy.</h4>
      <div class="flex flex-row gap-4 ml-[128px]">
        <ul>
          <li>Discover</li>
          <li>Connect wallet</li>
          <li>Create item</li>
        </ul>
        <ul>
          <li>Download</li>
          <li>Demos</li>
          <li>Support</li>
        </ul>
      </div>
      <div class="flex flex-col gap-7">
        <h4>Subscribe our newsletter to get more free design course and resource</h4>
        <form action="">

           <CInput type='text' placeholder="Enter your email" class="relative w-[352px]"
          />
          <!-- <input
            type="text"
            placeholder="Enter your email"
            class="w-[352px] flex relative py-2.5 p-3 border-2 border-[#777E90] bg-[#FCFCFD] rounded-xl :placehoder= 'text-xs font-normal"
          /> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import CInput from '@/components/Base/CInput.vue'
</script>

<style></style>
