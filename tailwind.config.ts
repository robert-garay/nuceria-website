import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          light: "hsl(var(--accent-light))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        indigo: {
          DEFAULT: "#2E3192",
          dark: "#1E2168",
          light: "#6B6DBF",
          pale: "#E8E9F5",
        },
        charcoal: {
          DEFAULT: "#1A1A2E",
          mid: "#3D3D5C",
        },
        teal: {
          DEFAULT: "#3D8C8C",
          light: "#C5E5E5",
          pale: "#E8F4F4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(26 26 46 / 0.05)",
        sm: "0 1px 3px 0 rgb(26 26 46 / 0.08), 0 1px 2px -1px rgb(26 26 46 / 0.06)",
        DEFAULT: "0 4px 6px -1px rgb(26 26 46 / 0.08), 0 2px 4px -2px rgb(26 26 46 / 0.06)",
        md: "0 10px 15px -3px rgb(26 26 46 / 0.08), 0 4px 6px -4px rgb(26 26 46 / 0.05)",
        lg: "0 20px 25px -5px rgb(26 26 46 / 0.08), 0 8px 10px -6px rgb(26 26 46 / 0.04)",
        xl: "0 25px 50px -12px rgb(26 26 46 / 0.15)",
        indigo: "0 8px 32px -8px rgb(46 49 146 / 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0, 0, 0.2, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
