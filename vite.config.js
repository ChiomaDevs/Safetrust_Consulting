import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // <-- v4 plugin
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),   // <-- this maps "@" to "src"
    },
  },
  base: '/Safetrust_Consulting/',
  // base: '/SAFETRUST_CONSULTING/' // keep if you're deploying to GitHub Pages under this repo
})
