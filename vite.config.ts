import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  ssr: {
    noExternal: true,
  },
  tanstackStart: {
    server: { entry: "server", output: "index.js" },
  },
});
