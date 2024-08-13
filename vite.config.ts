import { fileURLToPath, URL } from 'node:url'
import {resolve} from "node:path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteYaml from "@modyfi/vite-plugin-yaml";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteYaml(),
    VueI18nPlugin({
      include: [resolve(__dirname, "./translations/**")], // this line breaks the app
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
