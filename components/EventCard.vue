<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img :src="image" :alt="title" class="w-full h-48 object-cover"/>
    <div class="p-6">
      <div class="flex items-start mb-4">
        <div class="text-center mr-4 bg-purple-50 px-4 py-2 rounded-lg">
          <div class="text-purple-600 font-bold uppercase text-sm">{{ month }}</div>
          <div class="text-2xl font-bold text-purple-900">{{ day }}</div>
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
          <p class="text-gray-600">{{ location }}</p>
        </div>
      </div>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <button class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
        Get Tickets
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  month: String,
  day: String,
  location: String
})
</script>