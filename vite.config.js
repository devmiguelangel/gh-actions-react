import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://mikeangello.github.io/gh-actions-react/',
  plugins: [react()]
})
