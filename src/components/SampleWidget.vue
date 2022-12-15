<script setup lang="ts">
import { ref } from "vue";
import { useAlertToast } from "@/composables/use-alert-toast";

const { showToast } = useAlertToast();

const message = ref("You have made it");

function presentToast() {
  showToast({ message: message.value, duration: 30000 });
}
</script>

<template>
  <form class="sample-widget" @submit.prevent="presentToast">
    <input
      type="text"
      placeholder="Enter a message"
      v-model="message"
      autofocus
      @keyup.enter.exact.prevent="presentToast"
    />
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped></style>
