import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import * as path from 'path'

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
