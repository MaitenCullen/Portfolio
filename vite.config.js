import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
      exclude: ["firebase", "firebase/app", "firebase/auth", "firebase/firestore", "firebase/analytics"],
    },
    base:'https://maitencullen.github.io/Portfolio/',
    plugins: [react()],
 
})
