import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stc: {
          bg: "var(--color-bg-primary)",
          surface: "var(--color-surface-soft)",
          accent: "var(--color-accent-success)",
          textDark: "var(--color-text-on-dark)",
          textLight: "var(--color-text-on-light)",
          textSecondary: "var(--color-text-secondary)",
          border: "var(--color-border-soft)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        md: "var(--shadow-md)",
      },
      maxWidth: {
        content: "1200px",
      },
      height: {
        navbar: "88px",
        "navbar-mobile": "72px",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
