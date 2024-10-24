<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-4">Join these brands</h2>
      <p class="text-center text-gray-600 mb-12">
        We've had the pleasure of working with industry-defining brands. These are just some of them.
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
        <img v-for="brand in brands" :key="brand.name"
          :src="brand.logo" :alt="brand.name"
          class="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const brands = [
  { name: 'Spotify', logo: '/images/brands/spotify.svg' },
  { name: 'Google', logo: '/images/brands/google.svg' },
  { name: 'Stripe', logo: '/images/brands/stripe.svg' },
  { name: 'YouTube', logo: '/images/brands/youtube.svg' },
  { name: 'Microsoft', logo: '/images/brands/microsoft.svg' },
  { name: 'Medium', logo: '/images/brands/medium.svg' },
  { name: 'Zoom', logo: '/images/brands/zoom.svg' },
  { name: 'Uber', logo: '/images/brands/uber.svg' },
  { name: 'Grab', logo: '/images/brands/grab.svg' }
]
</script>