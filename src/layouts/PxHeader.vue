<template>
  <div class="w-full bg-gray-100">
    <div class="flex justify-between items-center h-[50px]">
      <div class="pl-4 cursor-pointer" @click="clickHambuger">
        <v-icon name="md-menu" scale="1.4" />
      </div>
      <div class="flex space-x-3 items-center justify-center px-3">
        <div class="group inline-block">
          <button class="border px-2 py-1 bg-white text-black rounded-sm flex items-center">
            <span class="font-semibold flex">{{ user.email }}</span>
            <v-icon name="fa-angle-down"></v-icon>
          </button>
          <ul
            class="bg-white border rounded-sm scale-0 group-hover:scale-95 absolute mx-auto w-40 text-center"
          >
            <li class="rounded-sm px-3 p-2 hover:bg-gray-100">
              <v-icon name="fa-user"></v-icon>
              <span class="pl-2">Profile</span>
            </li>
            <li class="rounded-sm px-3 p-2 hover:bg-gray-100">
              <v-icon name="md-login"></v-icon>
              <span class="pl-2">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
defineProps({
  dataOpenSideBar: {
    type: Boolean
  },
  clickHambuger: {
    type: Function
  }
})

const user = reactive({
  email: 'administrator@gmail.com'
})

// const toggle = (event) => {
//   this.$refs.menu.toggle(event)
// }
</script>

<style scoped></style>
