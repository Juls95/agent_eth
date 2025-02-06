import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
    global: 'window'
  },
  resolve: {
    alias: {
      'async_hooks': path.resolve(__dirname, './src/utils/browserPolyfills.ts'),
      'node:async_hooks': path.resolve(__dirname, './src/utils/browserPolyfills.ts')
    }
  },
  optimizeDeps: {
    include: ['@langchain/langgraph'],
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
}); 