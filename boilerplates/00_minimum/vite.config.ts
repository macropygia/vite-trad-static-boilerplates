import path from 'path'

import { defineConfig } from 'vite'
import input from '@macropygia/vite-plugin-glob-input'
import imagemin from '@macropygia/vite-plugin-imagemin-cache'
import pug from '@macropygia/vite-plugin-pug-static'

export default defineConfig({
  root: 'src',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    pug(),
    imagemin(),
    input({
      patterns: ['src/**/[^_]*.pug'],
    }),
  ],
})
