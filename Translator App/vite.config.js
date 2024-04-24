import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  env: {
    VITE_RAPIDAPI_KEY: process.env.VITE_RAPIDAPI_KEY,
  },
  plugins: [react()],
})
