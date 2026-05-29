import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// Dev-only: serve the Decap CMS at /admin/ (and /admin). Vite's SPA fallback
// otherwise serves the React app for the trailing-slash path, which has no
// /admin route. On static hosts (GitHub Pages) /admin/ resolves to its
// index.html automatically, so this only matters for `vite dev`.
const adminIndexFallback = (): Plugin => ({
  name: 'admin-index-fallback',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const url = req.url?.split('?')[0];
      if (url === '/admin' || url === '/admin/') {
        req.url = '/admin/index.html';
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables based on the current mode
  const env = loadEnv(mode, process.cwd(), '');

  // Base URL strategy:
  // - Development: ALWAYS '/'
  // - Production (custom domain): prefer env (process or .env), fallback to '/'
  let base: string;
  if (mode !== 'production') {
    base = '/';
  } else {
    const baseFromProcess = process.env.VITE_BASE_URL;
    const baseFromEnvFiles = env.VITE_BASE_URL;
    base = baseFromProcess || baseFromEnvFiles || '/';
  }

  return {
    plugins: [react(), adminIndexFallback()],
    base,
    server: {
      port: 5173,
      host: true,
      // Dev proxy to avoid CORS when calling the backend from the browser
      proxy: mode !== 'production' ? {
        '/api': {
          target: env.VITE_DEV_API_TARGET || 'https://your-backend-url.railway.app',
          changeOrigin: true,
          secure: false,
          // keep '/api' prefix so backend receives '/api/...'
          // rewrite: (path) => path, // no-op
        }
      } : undefined,
    },
    define: {
      'process.env.VITE_GOOGLE_MAPS_API_KEY': JSON.stringify(env.VITE_GOOGLE_MAPS_API_KEY),
    },
    build: {
      target: 'es2015',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            icons: ['lucide-react'],
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: [],
    },
    css: {
      devSourcemap: false,
    },
  };
});