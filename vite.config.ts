import { URL, fileURLToPath } from "node:url"
import { EventEmitter } from "node:events"
import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import viteTsConfigPaths from "vite-tsconfig-paths"

// Reduce noisy MaxListenersExceededWarning from Node's gzip stream in preview/prod.
EventEmitter.defaultMaxListeners = 25

const config = defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    devtools(),
    // @ts-ignore - Tailwind CSS is not typed correctly
    tailwindcss(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),

    tanstackStart(),
    viteReact(),
  ],
})

export default config
