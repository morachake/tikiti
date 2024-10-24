<template>
  <header class="bg-white shadow-sm">
    <div class="flex justify-between items-center px-8 py-4">
      <div class="flex items-center space-x-4">
        <NuxtLink to="/dashboard" class="text-xl font-bold text-purple-600">
          Eventick Dashboard
        </NuxtLink>
      </div>
      <div class="flex items-center space-x-4">
        <div class="relative">
          <button @click="toggleDropdown" 
            class="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <img :src="user.avatar" alt="" class="w-8 h-8 rounded-full"/>
            <span>{{ user.name }}</span>
          </button>
          <div v-if="showDropdown" 
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
            <button @click="logout" 
              class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const showDropdown = ref(false)
const user = ref({
  name: 'John Doe',
  avatar: '/images/avatar.jpg'
})

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const logout = () => {
  // Add logout logic here
  navigateTo('/login')
}
</script>