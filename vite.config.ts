import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// TechSculptor Portfolio Configuration
// Custom Vite setup for optimal development experience
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
