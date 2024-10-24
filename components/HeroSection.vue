<template>
  <section class="bg-gradient-to-r from-purple-500 to-purple-900 text-white py-16">
    <div class="container mx-auto px-4 flex items-center">
      <div class="w-1/2">
        <img :src="heroImage" alt="Event Image" class="w-full h-auto"/>
      </div>
      <div class="w-1/2 pl-12">
        <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
        <p class="mb-8">{{ description }}</p>
        <div class="flex space-x-4">
          <button class="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600">
            Get Ticket
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-900">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'SBS MTV The Kpop Show Ticket Package'
  },
  description: {
    type: String,
    default: 'Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.'
  },
  heroImage: {
    type: String,
    default: '/images/hero.jpg'
  }
})
</script>