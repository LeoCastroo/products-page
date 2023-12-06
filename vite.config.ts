import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Definição da porta que o projeto irá rodar quando executarmos npm run preview
  preview: {
    host: true, 
    port: 8080
  }
})
