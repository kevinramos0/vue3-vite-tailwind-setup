<template>
  <div class="w-full h-full flex">
    <side-bar :dataOpenSideBar="openSidebar" />
    <div class="w-full h-full">
      <px-header :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" />
      <div class="w-full h-[calc(100vh-50px)]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PxHeader from './PxHeader.vue'
import SideBar from '@/layouts/SideBar.vue'

const openSidebar = ref(false)

const toggleSidebar = () => (openSidebar.value = !openSidebar.value)
</script>

<style scoped></style>
