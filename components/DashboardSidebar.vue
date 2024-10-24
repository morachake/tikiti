<template>
  <aside class="w-64 bg-white shadow-sm h-screen">
    <nav class="p-4">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.path">
          <NuxtLink :to="item.path" 
            class="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700"
            :class="{ 'bg-purple-50 text-purple-700': isActive(item.path) }">
            <span class="text-xl">{{ item.icon }}</span>
            <span>{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const route = useRoute()

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Events', path: '/dashboard/events', icon: '🎪' },
  { name: 'Analytics', path: '/dashboard/analytics', icon: '📈' },
  { name: 'Settings', path: '/dashboard/settings', icon: '⚙️' }
]

const isActive = (path) => {
  return route.path === path
}
</script>