import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Use a single slash so it works on Netlify custom domains
export default defineConfig({
  plugins: [react()],
  base: '/',
})
