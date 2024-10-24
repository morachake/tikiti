// Simple auth middleware
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState('user')
  
  // If user is not logged in, redirect to login page
  if (!user.value) {
    return navigateTo('/login')
  }
})