/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    solidPlugin(),
    ViteMinifyPlugin({})
  ],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext',
    minify: 'terser'
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    transformMode: { web: [/\.[jt]sx?$/] },
    setupFiles: ['node_modules/@testing-library/jest-dom/extend-expect.js'],
    deps: { registerNodeLoader: true },
    threads: false,
    isolate: false,
    mockReset: true
  }
})
