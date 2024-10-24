<template>
  <div>
    <main>
      <HeroSection />
      <SearchBar />
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl font-bold">Upcoming Events</h2>
            <div class="flex space-x-4">
              <select class="px-4 py-2 rounded-lg bg-gray-100">
                <option>Weekdays</option>
                <option>Weekends</option>
              </select>
              <select class="px-4 py-2 rounded-lg bg-gray-100">
                <option>Event Type</option>
                <option>Concert</option>
                <option>Conference</option>
              </select>
              <select class="px-4 py-2 rounded-lg bg-gray-100">
                <option>Any Category</option>
                <option>Music</option>
                <option>Business</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              v-for="event in events"
              :key="event.title"
              v-bind="event"
            />
          </div>
        </div>
      </section>
      <BrandsSection />
      <BlogSection />
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const events = [
  {
    title: 'Wonder Girls 2010 Wonder Girls World Tour San Francisco',
    description: "We'll get you directly seated and inside for you to enjoy the show.",
    image: '/images/events/wonder-girls.jpg',
    month: 'APR',
    day: '14',
    location: 'San Francisco, CA'
  },
  {
    title: 'JYJ 2011 JYJ Worldwide Concert Barcelona',
    description: 'Directly seated and inside for you to enjoy the show.',
    image: '/images/events/jyj.jpg',
    month: 'AUG',
    day: '20',
    location: 'Barcelona, Spain'
  },
  {
    title: '2011 Super Junior SM Town Live \'10 World Tour New York City',
    description: 'Directly seated and inside for you to enjoy the show.',
    image: '/images/events/super-junior.jpg',
    month: 'SEP',
    day: '18',
    location: 'New York City, NY'
  }
]
</script>