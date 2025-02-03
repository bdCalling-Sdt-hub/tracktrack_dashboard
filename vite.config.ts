import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: { host: '209.97.134.184', port: 8002 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})