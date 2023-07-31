<template>
    <div class="grid  gap-2">
        <p>Please enter the information below to connect to your notion account</p>
        <p class="guide-text">For a guide on how to get this information please read this article: <a href="https://developers.notion.com/docs/authorization">How to create an integration</a></p>
        <form @submit="handleSubmit">
        <div class="input-group">
            <label for="conectionId">Conection id</label>
            <input required name="databaseId" type="text"/>
        </div>
        <div class="input-group">
            <label for="databaseId">Database id</label>
            <input required name="databaseId" type="text" class="" />
        </div>
        <button type="submit">Connect to my Notion</button>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(e)
}
</script>
  
<style scoped>
    form{
        @apply flex flex-col gap-2
    }
    label{
        @apply text-lg text-neutral-600
    }
    .guide-text{
        @apply text-sm text-neutral-800
    }

    a{
        @apply text-orange-600 hover:underline
    }
    .input-group {
        display: flex;
        flex-direction: column;
    }

    input{
        @apply border-gray-300 border rounded-md px-2
    }

    button{
        @apply bg-black text-gray-50 font-semibold text-xl px-3 rounded-md hover:outline outline-blue-300 outline-offset-2
    }
</style>