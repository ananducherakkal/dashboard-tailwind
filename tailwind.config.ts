import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary-50) / <alpha-value>)",
          foreground: "rgb(var(--text) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--gray-60) / <alpha-value>)",
          foreground: "rgb(var(--text) / <alpha-value>)",
        },
        background: {
          DEFAULT: "rgb(var(--bg-80) / <alpha-value>)",
          light: "rgb(var(--bg-30) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--border-50) / <alpha-value>)",
          50: "rgb(var(--border-50) / <alpha-value>)",
          30: "rgb(var(--border-30) / <alpha-value>)",
          10: "rgb(var(--border-10) / <alpha-value>)",
        },
        gray: {
          10: "rgb(var(--gray-10) / <alpha-value>)",
          30: "rgb(var(--gray-30) / <alpha-value>)",
          40: "rgb(var(--gray-40) / <alpha-value>)",
          60: "rgb(var(--gray-60) / <alpha-value>)",
          70: "rgb(var(--gray-70) / <alpha-value>)",
          80: "rgb(var(--gray-80) / <alpha-value>)",
        },
        text: {
          DEFAULT: "rgb(var(--text) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
          light: {
            DEFAULT: "rgb(var(--text-light) / <alpha-value>)",
            secondary: "rgb(var(--text-light-secondary) / <alpha-value>)",
          },
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // shadcn
        input: "var(--bg-50)",
        ring: "var(--primary-50)",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        xl: "32px",
        lg: "20px",
        md: "18px",
        base: "16px",
        sm: "14px",
        xs: "12px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
