import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'EmsEditor',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue', 'pinia', 'element-plus'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          pinia: 'Pinia',
          'element-plus': 'ElementPlus'
        }
      }
    }
  }
})
