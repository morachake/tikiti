<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-md w-full mx-4">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900">Welcome back</h2>
        <p class="mt-2 text-gray-600">Please sign in to your account</p>
      </div>
      
      <form @submit.prevent="login" class="bg-white p-8 rounded-lg shadow-md">
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input v-model="email" type="email" required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input v-model="password" type="password" required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input type="checkbox" id="remember" class="h-4 w-4 text-purple-600"/>
              <label for="remember" class="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" class="text-sm text-purple-600 hover:text-purple-500">
              Forgot password?
            </a>
          </div>

          <button type="submit"
            class="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        Not registered?
        <NuxtLink to="/register" class="text-purple-600 hover:text-purple-500">
          Create an account
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
const email = ref('')
const password = ref('')

const login = async () => {
  try {
    // Add login logic here
    const user = {
      id: 1,
      name: 'John Doe',
      email: email.value,
      avatar: '/images/avatar.jpg'
    }
    
    // Store user in state
    useState('user', () => user)
    
    // Redirect to dashboard
    navigateTo('/dashboard')
  } catch (error) {
    console.error('Login error:', error)
  }
}
</script>