<template>
  <footer class="bg-navy-900 text-white py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-2xl font-bold mb-6">Event<span class="text-purple-500">tick</span></h3>
          <p class="text-gray-400 mb-6">
            Eventick is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Plan Events</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Create and Set Up</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Sell Tickets</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Online RSVP</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Online Events</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Eventick</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Press</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Help Center</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">How it Works</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Privacy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Terms</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Stay In The Loop</h4>
          <p class="text-gray-400 mb-4">
            Join our mailing list to stay in the loop with our newest for Event and concert
          </p>
          <div class="flex">
            <input type="email" placeholder="Enter your email address..." 
              class="flex-1 px-4 py-2 rounded-l-lg bg-navy-800 text-white focus:outline-none"
            />
            <button class="px-6 py-2 bg-purple-600 text-white rounded-r-lg hover:bg-purple-700">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>Copyright © 2024 Eventick. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>