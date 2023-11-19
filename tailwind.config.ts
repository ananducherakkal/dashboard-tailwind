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
          DEFAULT: "var(--primary)",
        },
        background: {
          DEFAULT: "var(--bg-50)",
          50: "var(--bg-50)",
        },
        border: {
          DEFAULT: "var(--border-50)",
          50: "var(--border-50)",
          30: "var(--border-30)",
        },
        gray: {
          10: "var(--border-10)",
          40: "var(--border-40)",
          60: "var(--border-60)",
          70: "var(--border-70)",
          80: "var(--border-80)",
        },
        text: {
          DEFAULT: "var(--text)",
          secondary: "var(--text-secondary)",
          light: {
            DEFAULT: "var(--text-light)",
            secondary: "var(--text-light-secondary)",
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
        lg: "2px",
        md: "18px",
        base: "16px",
        sm: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
