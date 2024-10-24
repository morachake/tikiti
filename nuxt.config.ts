// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  // Add CSS configuration
  css: ['~/assets/css/main.css'],
  
  // Configure modules
  modules: ['@nuxtjs/tailwindcss'],
  
  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: false,
  },

  // Add proper CORS and security headers
  nitro: {
    routeRules: {
      '/**': { 
        cors: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Cross-Origin-Embedder-Policy': 'require-corp'
        }
      }
    },
    preset: 'netlify'
  },

  // Optimize for WebContainer environment
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: '0.0.0.0'
      }
    }
  },

  // SSG configuration for static deployment
  ssr: true
})