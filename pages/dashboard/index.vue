<template>
  <div>
    <div class="mb-8 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Event Dashboard</h1>
      <NuxtLink to="/dashboard/events/new" 
        class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
        Create New Event
      </NuxtLink>
    </div>
    
    <!-- Analytics Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <DashboardCard title="Total Events" value="24" icon="🎪" />
      <DashboardCard title="Total Sales" value="$12,456" icon="💰" />
      <DashboardCard title="Active Events" value="8" icon="✨" />
      <DashboardCard title="Total Views" value="1,234" icon="👁" />
    </div>

    <!-- Events Table -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <table class="w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sales</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="event in events" :key="event.id">
            <td class="px-6 py-4">
              <div class="flex items-center">
                <img :src="event.image" :alt="event.title" class="h-10 w-10 rounded-lg object-cover mr-3"/>
                <div>
                  <div class="font-medium text-gray-900">{{ event.title }}</div>
                  <div class="text-gray-500">{{ event.location }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 text-gray-500">{{ event.date }}</td>
            <td class="px-6 py-4">
              <span :class="getStatusClass(event.status)">
                {{ event.status }}
              </span>
            </td>
            <td class="px-6 py-4 text-gray-500">${{ event.sales }}</td>
            <td class="px-6 py-4">
              <div class="flex space-x-3">
                <button @click="editEvent(event.id)" 
                  class="text-blue-600 hover:text-blue-900">Edit</button>
                <button @click="deleteEvent(event.id)"
                  class="text-red-600 hover:text-red-900">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})

const events = ref([
  {
    id: 1,
    title: 'Summer Music Festival',
    location: 'Central Park, NY',
    date: '2024-07-15',
    status: 'Active',
    sales: '5,234',
    image: '/images/events/summer-fest.jpg'
  }
])

const getStatusClass = (status) => {
  const classes = {
    'Active': 'bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm',
    'Draft': 'bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm',
    'Ended': 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm'
  }
  return classes[status]
}

const editEvent = (id) => {
  navigateTo(`/dashboard/events/${id}/edit`)
}

const deleteEvent = async (id) => {
  if (confirm('Are you sure you want to delete this event?')) {
    // Add delete logic here
    console.log('Deleting event:', id)
  }
}
</script>