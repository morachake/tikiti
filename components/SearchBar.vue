<template>
  <div class="container mx-auto px-4 -mt-8">
    <div class="bg-navy-900 rounded-lg p-6 flex space-x-4 shadow-lg">
      <div class="flex-1">
        <input type="text" placeholder="Search Event" 
          class="w-full p-3 rounded-lg bg-navy-800 text-white" 
          v-model="searchQuery"/>
      </div>
      <div class="flex-1">
        <input type="text" placeholder="Place" 
          class="w-full p-3 rounded-lg bg-navy-800 text-white" 
          v-model="place"/>
      </div>
      <div class="flex-1">
        <select class="w-full p-3 rounded-lg bg-navy-800 text-white">
          <option>Any date</option>
          <option>Today</option>
          <option>Tomorrow</option>
          <option>This week</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const place = ref('')
</script>