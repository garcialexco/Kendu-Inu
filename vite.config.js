import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    minify: "terser",
    manifest: "manifest.json",
    assetDir: "./assets",
    emptyOutDir: true,
    sourcemap: true,
    terserOptions: {
      mangle: {
        reserved: ["_"],
      },
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        styles: path.resolve(__dirname, "assets/styles/main.scss"),
        scripts: path.resolve(__dirname, "assets/scripts/main.js"),
      },
      output: {
        entryFileNames: "assets/scripts/[hash].js",
        chunkFileNames: "assets/scripts/[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? "")) {
            return "assets/styles/[hash].[ext]";
          }

          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? "")) {
            return "assets/images/[name].[ext]";
          }

          if (/\.(woff2|woff|ttf|otf)$/.test(name ?? "")) {
            return "assets/fonts/[name].[ext]";
          }

          return "assets/[name].[ext]";
        },
      },
      cache: false,
    },
    optimizeDeps: {
      include: ["assets/scripts/**/*.js"],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  server: {
    watch: {
      include: ["index.html", "assets/**/*"], // Watch the HTML file and asset directories
    },
  },
});
