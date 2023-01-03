import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: ['es2015'],
  format: ['esm'],
  clean: true,
  dts: true,
})
