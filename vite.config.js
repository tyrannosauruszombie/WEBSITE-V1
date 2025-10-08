import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WEBSITE-V1/', // 👈 must match your repo name exactly, with leading and trailing slash
})
