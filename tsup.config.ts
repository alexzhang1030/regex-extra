import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  target: ['es2017'],
  format: ['esm', 'cjs'],
  clean: true,
  dts: true,
})
