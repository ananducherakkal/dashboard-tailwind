import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
        },
        background: {
          DEFAULT: "rgb(var(--bg-50) / <alpha-value>)",
          50: "rgb(var(--bg-50) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--border-50) / <alpha-value>)",
          50: "rgb(var(--border-50) / <alpha-value>)",
          30: "rgb(var(--border-30) / <alpha-value>)",
        },
        gray: {
          10: "rgb(var(--gray-10) / <alpha-value>)",
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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
  plugins: [],
};
export default config;
