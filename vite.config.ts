import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'imgrafic' with your actual repo name if different
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/imgrafic/', // <-- Important for GitHub Pages
});
