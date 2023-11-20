/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    passWithNoTests: false,
    setupFiles: './testSetup/setupFiles.js',
  },
})