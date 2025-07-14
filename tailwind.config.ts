import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        "auth-background": "var(--auth-background)",
        "auth-card": "var(--auth-card-bg)",
        "primary-blue": "var(--primary-blue)",
        "primary-blue-hover": "var(--primary-blue-hover)",
        "text-on-bg": "var(--text-on-bg)",
      },
    },
  },
};

export default config;
