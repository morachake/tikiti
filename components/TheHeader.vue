<template>
  <header class="bg-gradient-to-r from-purple-600 to-purple-900 p-4">
    <nav class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center text-white text-2xl font-bold">
        <span class="mr-2">🎫</span> Eventick
      </NuxtLink>
      <div class="flex items-center space-x-6">
        <NuxtLink v-for="item in menuItems" :key="item.text" 
          :to="item.link" 
          class="text-white hover:text-purple-200">
          {{ item.text }}
        </NuxtLink>
        <button class="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800">
          Login
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
const menuItems = [
  { text: 'Schedule', link: '/schedule' },
  { text: 'Speakers', link: '/speakers' },
  { text: 'Ticket', link: '/ticket' },
  { text: 'Contact', link: '/contact' }
]
</script>