import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import middleware from '@macropygia/vite-plugin-connect-middleware'
import input from '@macropygia/vite-plugin-glob-input'
import imagemin from '@macropygia/vite-plugin-imagemin-cache'
import pug from '@macropygia/vite-plugin-pug-static'

const basedir = path.resolve(__dirname, 'src')

export default defineConfig({
  root: 'src',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  css: {
    devSourcemap: true
  },
  plugins: [
    react(),
    middleware((req, res, next) => {
      if (!req.url) return next()
      if (req.url.startsWith('/app/')) {
        req.url = '/app/'
      } else if (req.url.startsWith('/external/')) {
        res.writeHead(301, { Location: 'https://example.com/' })
        return res.end()
      }
      return next()
    }),
    pug({
      buildOptions: { basedir },
      serveOptions: { basedir },
    }),
    imagemin({
      exclude: [
        '**/dnc_*.*', // Do Not Compress
      ],
      plugins: {
        pngquant: {
          speed: 1,
          quality: [0.65, 1],
        },
        mozjpeg: {
          quality: 85,
        },
      },
    }),
    input({
      patterns: ['src/**/[^_]*.pug', 'src/html/**/*.html'],
      options: {
        ignore: ['src/exclude/**/*.pug'],
      },
    }),
  ],
  resolve: {
    alias: {
      '~/': `${basedir}/`,
      '@/': `${basedir}/assets/`,
      '^/': `${basedir}/assets/react/`,
    },
  },
})
