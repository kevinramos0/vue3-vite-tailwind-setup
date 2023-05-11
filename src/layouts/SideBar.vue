<template>
  <div
    class="h-screen bg-gray-800"
    id="side-bar"
    :class="dataOpenSideBar == true ? 'side-bar-visible' : 'side-bar-close'"
  >
    <div class="bg-gray-700 h-[50px] flex justify-around">
      <app-logo class="w-12 p-1 items-center" />
      <div
        class="text-xl font-bold flex items-center pr-7 text-white h-full"
        v-show="dataOpenSideBar"
      >
        APP DEV
      </div>
      <!-- <img src="https://avatars.githubusercontent.com/u/97021587?v=4" v-show="!dataOpenSideBar" class="p-1 w-8 h-8 rounded-full ring-2 ring-gray-100 dark:ring-gray-500 " alt="Avatar" /> -->
    </div>
    <div class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-gray-900">
      <div class="menu-man text-left px-4 whitespace-nowrap">
        <!-- <div class="profile flex justify-center items-center text-center p-5 ">
          <div class="text-center  text-white" v-show="dataOpenSideBar">
            <h5 class="text-xl font-medium leading-tight mb-2"> My Name</h5>
            <p class="text-gray-500">Admin </p>
          </div>
        </div> -->
        <div class="rounded-sm cursor-pointer text-gray-300 hover:text-white">
          <router-link to="/" class="px-1 flex space-x-2 py-3">
            <tool-tip :show="!dataOpenSideBar" :message="'Dashboard'">
              <v-icon name="md-menu" scale="1.2"></v-icon>
            </tool-tip>
            <span v-show="dataOpenSideBar">Dashboard</span></router-link
          >
        </div>
        <div class="rounded-sm cursor-pointer text-gray-300 hover:text-white">
          <router-link :to="{ name: 'about' }" class="px-1 flex space-x-2">
            <tool-tip :show="!dataOpenSideBar" :message="'Users'">
              <v-icon name="fa-users" scale="1.2"></v-icon>
            </tool-tip>
            <span v-show="dataOpenSideBar">Users</span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ToolTip from '@/components/ToolTip.vue'
import AppLogo from '@/components/AppLogo.vue'
defineProps({
  dataOpenSideBar: {
    type: Boolean
  }
})
</script>

<style lang="css" scoped>
#side-bar {
  overflow: hidden;
  transition: 300ms;
}

.side-bar-visible {
  width: 200px !important;
}

.side-bar-close {
  width: 70px !important;
}
</style>
