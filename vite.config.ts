import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite-plugin'
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [react(), tailwindcss(), vike()],
  ssr: {
    noExternal: ['vike']
  },
  server: {
    middlewareMode: true
  }
})
