import { spectrePreset } from "@ozguruysal/spectre-tailwind-preset";

import type { Config } from "tailwindcss";

export default {
  ...spectrePreset,
  content: ["./src/**/*.{ts,tsx}", "../.storybook/**/*/*.html"],
  theme: {
    extend: {
      ...spectrePreset.theme,
    },
  },
  plugins: [],
} satisfies Config;
