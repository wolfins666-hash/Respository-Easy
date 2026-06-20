import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: false
  },
  preview: {
    host: '0.0.0.0',
    open: false
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    assetsInlineLimit: 4096
  }
});
