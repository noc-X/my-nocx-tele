import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    rollupOptions: {
      external: ['axios'],
      input: path.resolve(__dirname, 'src/main.tsx')
    }
  }
});
