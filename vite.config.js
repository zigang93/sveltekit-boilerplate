import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import * as path from 'path'

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/tests/setup.ts',
    clearMocks: true,
    mockReset: true,
    exclude: ['node_modules', './e2e'],
  },
  // server: {
  //   port: 3000,
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
