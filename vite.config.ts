import { defineConfig } from 'vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/mai3-phaser-ui-examples/',
  build: {
    outDir: 'dist',  // 输出目录
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true
        })
      ]
    }
  }
})