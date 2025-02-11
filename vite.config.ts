import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        routes: 'src/pages/**/*.tsx' // Ensures all pages are included in the build
      }
    }
  },
  server: {
    historyApiFallback: true // Ensures correct routing in development
  }
});
