<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-8">Create New Event</h1>
    
    <form @submit.prevent="createEvent" class="bg-white rounded-lg shadow-md p-6">
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Event Title
          </label>
          <input v-model="event.title" type="text" 
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input v-model="event.date" type="date" 
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Time
            </label>
            <input v-model="event.time" type="time" 
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input v-model="event.location" type="text" 
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea v-model="event.description" rows="4" 
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            required
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Ticket Price ($)
          </label>
          <input v-model="event.price" type="number" min="0" step="0.01"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Event Image
          </label>
          <input type="file" accept="image/*" @change="handleImageUpload"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
      </div>

      <div class="mt-8 flex justify-end space-x-4">
        <button type="button" @click="$router.back()"
          class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
          Cancel
        </button>
        <button type="submit"
          class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Create Event
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
})

const event = ref({
  title: '',
  date: '',
  time: '',
  location: '',
  description: '',
  price: '',
  image: null
})

const handleImageUpload = (e) => {
  const file = e.target.files[0]
  // Handle image upload logic here
}

const createEvent = async () => {
  try {
    // Add event creation logic here
    console.log('Creating event:', event.value)
    // On success:
    navigateTo('/dashboard/events')
  } catch (error) {
    console.error('Error creating event:', error)
  }
}
</script>