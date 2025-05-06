import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer({}), tailwindcss({})],
    },
  },
  build: {
    optimizeDeps: {
      exclude: ['@wormhole-foundation/wormhole-connect'],
    },
  },

  server: {
    watch: {
      include: ['index.html', 'assets/**/*'], // Watch the HTML file and asset directories
    },
  },
});
