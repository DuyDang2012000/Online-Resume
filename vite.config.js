import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // Minification via esbuild (fast and optimal)
    cssCodeSplit: true, // Enable CSS code splitting for smaller payload
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Advanced manual chunks for minimizing bundle size and optimizing caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            return 'vendor-libs';
          }
        }
      }
    }
  }
})
