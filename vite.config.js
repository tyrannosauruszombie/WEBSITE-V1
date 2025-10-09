import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ This ensures proper asset paths for Netlify
  build: {
    outDir: 'dist',
  },
})
