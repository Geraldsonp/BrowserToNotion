<template>
  <h2>Sending to: {{ databaseInfo?.title.text.content}}</h2>

  <div class="">
    <button class="px-2 py-1 text-gray-50 bg-black rounded-md hover:outline-1 outline-stone-500">Send to Notion</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "../services/api";

const databaseInfo = ref(null)

onMounted( () => {
  api.getDatabaseInfo().then( (res) => {
    databaseInfo.value = res
  })
})
</script>

<style>

</style>