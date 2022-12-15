<template>
  <div class="alert-toast">
    <p class="alert-toast--message">{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<style scoped lang="scss">
.alert-toast {
  padding: 16px;
  border-radius: 24px;
  background: #ee5340;
  color: #000000;
}
</style>
