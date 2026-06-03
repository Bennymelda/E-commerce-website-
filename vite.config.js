import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
 plugins: [
 tailwindcss(),
 react(),
 VitePWA({
      registerType: 'autoUpdate',
      injectRegister: null,
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'ShopEase',
        short_name: 'ShopEase',
        description: 'ShopEase is a fast and user-friendly grocery shopping app for discovering and ordering fresh organic products, fruits, vegetables, and everyday essentials online.',
        theme_color: '#16a34a',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/app-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
            src: '/favicon.svg',
            sizes: '48x46',
            type: 'image/svg+xml'
          }
        ]
      },
    workbox: {
 globPatterns: ['**/*.{js,css,html,svg,png,ico,json}'],
 ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
 maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
 runtimeCaching: [
 // Page caching
 {
 urlPattern: ({ request }) => request.mode === 'navigate',
 handler: 'NetworkFirst',
 options: {
 cacheName: 'pages-cache',
 },
 },

 // Image caching - handles jpg, jpeg, webp (large images)
 {
 urlPattern: ({ request }) =>
 request.destination === 'image',

 handler: 'CacheFirst',

 options: {
 cacheName: 'product-images',

 expiration: {
 maxEntries: 200,
 maxAgeSeconds: 60 * 60 * 24 * 30,
 },
 },
 },
 ],
}
    })
 ]
})