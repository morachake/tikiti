<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-4">Blog</h2>
      <p class="text-center text-gray-600 mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in blogPosts" :key="post.title" 
          class="bg-white rounded-lg overflow-hidden shadow-lg">
          <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ post.title }}</h3>
            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
            <div class="flex items-center text-sm text-gray-500">
              <span>{{ post.date }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.author }}</span>
            </div>
          </div>
        </article>
      </div>
      <div class="text-center mt-8">
        <button class="bg-white text-purple-600 px-8 py-3 rounded-full border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
          Load More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const blogPosts = [
  {
    title: '6 Strategies to Find Your Conference Keynote and Other Speakers',
    excerpt: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    image: '/images/blog/conference.jpg',
    date: '12 Mar',
    author: 'Jhon Doe'
  },
  {
    title: 'How Successfully Used Paid Marketing to Drive Incremental Ticket Sales',
    excerpt: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    image: '/images/blog/marketing.jpg',
    date: '12 Mar',
    author: 'Jhon Doe'
  },
  {
    title: 'Introducing Workspaces: Work smarter, not harder with new navigation',
    excerpt: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    image: '/images/blog/workspace.jpg',
    date: '12 Mar',
    author: 'Jhon Doe'
  }
]
</script>