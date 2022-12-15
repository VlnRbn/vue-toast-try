<script setup lang="ts">
import SampleWidget from "./components/SampleWidget.vue";
</script>

<template>
  <main>
    <SampleWidget />
  </main>
  <div id="toast-container" class="toast-container">
    <!-- this will serve as container for <alert-toast /> -->
  </div>
</template>

<style scoped>
.toast-container {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
}
</style>
