import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import pandacss from "@pandacss/astro";

const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [pandacss(), solidJs()],
  vite: {
    clearScreen: false,
    server: {
      strictPort: true,
      host: mobile ? true : false,
      hmr: mobile
        ? {
            protocol: "ws",
            host: await internalIpV4(),
          }
        : undefined,
    },
  },
});
