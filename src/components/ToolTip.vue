<template>
  <div class="group">
    <slot></slot>
    <span
      v-show="show"
      class="absolute scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100"
      >{{ message }}</span
    >
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true,
    default: ''
  },
  show: {
    type: Boolean,
    required: true,
    default: true
  }
})
</script>

<style lang="scss" scoped></style>
