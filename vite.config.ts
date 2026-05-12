import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const port = Number(process.env.PORT) || 3000;

export default defineConfig({
  server: {
    port,
    host: '0.0.0.0',
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
