<template>
  <h2>Sending to: {{ databaseInfo?.title.text.content}}</h2>

  <div class="flex justify-center mt-8">
    <button @click="getTabs" class="px-2 py-1 text-gray-50 bg-black rounded-md hover:outline-1 outline-stone-500">Send to Notion</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "../services/api";

const databaseInfo = ref(null)

// const getTabs = () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const activeTab = tabs[0];
//     const url = activeTab.url;
//     const title = activeTab.title;
//     const favIconUrl = activeTab.favIconUrl;
//     console.log(activeTab);
//   });
// };

onMounted( () => {
  api.getDatabaseInfo().then( (res) => {
    databaseInfo.value = res
  })
})
</script>

<style>

</style>