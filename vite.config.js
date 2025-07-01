import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
    
  ],
  server: {
    proxy: {
      // Proxy all requests starting with / to your local API server
      'https://api.willy-v.com': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^https:\/\/api\.willy-v\.com/, ''),
      },
      '/internal': 'http://localhost:8080'
    }
  }
})
