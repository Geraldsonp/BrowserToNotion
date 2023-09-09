<template>
  <h2 class="text-center">Configured Database: {{ databaseName}}</h2>

  <div class="flex flex-col justify-content-center justify-center mt-8">
    <p>Current URL: {{currentUrl}}</p>
    <button @click="postPage" class="px-2 py-1 text-gray-50 bg-black rounded-md hover:outline-1 outline-stone-500">Send to Notion</button>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import api from "../services/api";

const databaseInfo = ref(null)
const databaseName = computed( () => `${databaseInfo.value?.icon.emoji} ${databaseInfo.value?.title[0].plain_text}`)
const currentUrl = computed( () => window.location.href)
// const getTabs = () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const activeTab = tabs[0];
//     const url = activeTab.url;
//     const title = activeTab.title;
//     const favIconUrl = activeTab.favIconUrl;
//     console.log(activeTab);
//   });
// };

const postPage = () => {
  api.createPage()
}

onMounted( () => {
  api.getDatabaseInfo().then( (res) => {
    databaseInfo.value = res
  })
})
</script>

<style>

</style>