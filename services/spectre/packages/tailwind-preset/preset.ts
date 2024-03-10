import type { Config } from "tailwindcss";

export const spectrePreset = {
  content: [],
  theme: {
    backgroundColor: {
      base: "rgba(var(--bg-base) / <alpha-value>)",
      primary: "rgba(var(--bg-primary) / <alpha-value>)",
      secondary: "rgba(var(--bg-secondary) / <alpha-value>)",
      success: "rgba(var(--bg-success) / <alpha-value>)",
      destructive: "rgba(var(--bg-destructive) / <alpha-value>)",
    },
    textColor: {
      base: "rgba(var(--text-base) / <alpha-value>)",
      primary: "rgba(var(--text-primary) / <alpha-value>)",
      secondary: "rgba(var(--text-secondary) / <alpha-value>)",
      success: "rgba(var(--text-success) / <alpha-value>)",
      destructive: "rgba(var(--text-destructive) / <alpha-value>)",
    },
  },
  plugins: [],
} satisfies Config;
