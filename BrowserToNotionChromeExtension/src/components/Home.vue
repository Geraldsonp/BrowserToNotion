<template>
  <div>
    {{ databaseInfo?.title.text.content }}
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import databaseService from "../services/DatabaseServices";

const databaseInfo = ref(null)

onMounted(async () => {
  databaseInfo.value = await databaseService.getDatabaseInfo()
})
</script>

<style>

</style>