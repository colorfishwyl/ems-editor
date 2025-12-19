import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

const projectRoot = resolve(__dirname, '..')

export default defineConfig({
  root: __dirname,
  plugins: [vue()],
  resolve: {
    alias: {
      '@colorfishwyl/ems-editor': resolve(projectRoot, 'src/index.js'),
      '@colorfishwyl/ems-editor/dist/style.css': resolve(projectRoot, 'dist/style.css')
    }
  },
  server: {
    port: 5175,
    open: true
  }
})
