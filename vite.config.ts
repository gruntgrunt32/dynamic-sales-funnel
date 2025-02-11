import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      // No need to specify `src/pages/**/*.tsx`, Vite will automatically include them
      input: 'index.html'
    }
  },
  server: {
    historyApiFallback: true // Ensures correct routing in development
  }
});
