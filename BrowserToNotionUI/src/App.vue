<style scoped>
</style>
<template>
    <div class="col-span-3 h-full ">
      <h1 class="text-3xl text-center">Send to Notion</h1>
      <Login v-if="!areCredentialsSet" @onTokenSet="getCredentials"/>
      <Home v-else />
    </div>
</template>
<script setup>
import { onMounted, ref, computed} from 'vue';
import appConfig from './AppConfig.js';
import Login from './components/LogIn.vue';
import Home from './components/Home.vue';


const areCredentialsSet = computed(() => {
  return appConfig.databaseId != "" && appConfig.notionToken != "";
});


</script>

