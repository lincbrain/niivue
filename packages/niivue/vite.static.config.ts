import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: resolve(__dirname, 'src'), 
  base: './',
  build: {
    target: 'esnext',
    outDir: resolve(__dirname, '../../dist_static'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html')
    }
  }
})