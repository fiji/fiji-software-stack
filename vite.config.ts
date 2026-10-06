import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // Work around lightningcss rejecting a nested rule in Slidev's built-in CSS.
    cssMinify: false,
  },
})
