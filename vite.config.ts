/// <reference types="node" />

import { defineConfig, loadEnv } from 'vite';
import type { PluginOption } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react';

// Type for environment variables
type Env = {
  VITE_GOOGLE_MAPS_API_KEY?: string;
  CI?: string;
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '') as unknown as Env;
  const isProduction = mode === 'production';
  
  return {
    plugins: [
      react(),
      isProduction && ViteImageOptimizer({
        png: { quality: 80 },
        jpg: { quality: 85 },
        webp: { lossless: false, quality: 85 },
        avif: { lossless: false, quality: 75 },
      }) as PluginOption,
      isProduction ? visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }) : null,
    ].filter(Boolean) as PluginOption[],
    
    base: '/children4worldchildren/',
    
    // Development server configuration
    server: {
      port: 5173,
      host: true,
      strictPort: true,
      open: !env.CI,
    },
    
    // Environment variables
    define: {
      'process.env.VITE_GOOGLE_MAPS_API_KEY': JSON.stringify(env.VITE_GOOGLE_MAPS_API_KEY),
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    
    // Build configuration
    build: {
      target: 'esnext',
      minify: 'terser',
      sourcemap: isProduction ? 'hidden' : false,
      reportCompressedSize: true,
      chunkSizeWarningLimit: 1500,
      
      // Terser configuration
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
          pure: ['console.log', 'console.info'],
        },
        format: {
          comments: false,
        },
      },
      
      // Rollup configuration
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            ui: ['lucide-react', 'clsx', 'tailwind-merge'],
            utils: ['date-fns', 'lodash-es'],
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) {
              return 'assets/misc/[name]-[hash][extname]';
            }
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1].toLowerCase();
            if (['png', 'jpg', 'jpeg', 'webp', 'avif', 'gif'].includes(ext)) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(ext)) {
              return 'assets/fonts/[name]-[hash][extname]';
            }
            return `assets/${ext}/[name]-[hash][extname]`;
          },
        },
      },
    },
    
    // Dependency optimization
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'lucide-react',
        'date-fns',
        'lodash-es',
      ],
      exclude: [],
      esbuildOptions: {
        target: 'esnext',
      },
    },
    
    // CSS configuration
    css: {
      devSourcemap: !isProduction,
      modules: {
        localsConvention: 'camelCaseOnly',
      },
    },
    
    // Preview configuration
    preview: {
      port: 4173,
      strictPort: true,
    },
  };
});