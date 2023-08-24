<style scoped>
</style>
<template>
    <div class="col-span-3 h-full ">
      <h1 class="text-3xl text-center">Send to Notion</h1>
      <Login v-if="databaseId === null && notionToken === null" @onTokenSet="getCredentials"/>
      <Home v-else />
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import Login from './components/LogIn.vue';
import Home from './components/Home.vue';

const databaseId = ref("")
const notionToken = ref("")

const getCredentials = () => {
  console.log("getting credentials")
   databaseId.value = localStorage.getItem("DatabaseId");
   notionToken.value = localStorage.getItem("NotionSecret");
}

onMounted( () => {
  getCredentials()
})

</script>

