import { defineConfig } from "astro/config";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "nl"],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  output: "hybrid",
  integrations: [
    tailwind(),
    icon()
  ],
});
