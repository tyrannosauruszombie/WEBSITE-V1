import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, readdirSync, mkdirSync, existsSync } from 'fs'

const copyPublicFolder = () => {
  return {
    name: 'copy-public-folder',
    closeBundle() {
      const srcDir = resolve(__dirname, 'public/thumbnails')
      const destDir = resolve(__dirname, 'dist/thumbnails')

      if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true })
      const files = readdirSync(srcDir)
      for (const file of files) {
        copyFileSync(`${srcDir}/${file}`, `${destDir}/${file}`)
      }
      console.log(`✅ Copied ${files.length} thumbnails to dist/thumbnails`)
    },
  }
}

export default defineConfig({
  plugins: [react(), copyPublicFolder()],
  base: '/', // ✅ correct for bendixoncontent.com
})
