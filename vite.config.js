import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer({}), tailwindcss({})],
    },
  },
  server: {
    watch: {
      include: ['index.html', 'assets/**/*'], // Watch the HTML file and asset directories
    },
  },
});
