import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: { host: '10.0.60.24', port: 5173 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})