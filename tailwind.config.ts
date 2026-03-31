import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d2e1ff",
          container: "#a7c6fa",
          fixed: "#d5e3ff",
          "fixed-dim": "#a9c8fc",
        },
        secondary: {
          DEFAULT: "#c0c7ce",
          container: "#434a4f",
          fixed: "#dce3ea",
          "fixed-dim": "#c0c7ce",
        },
        tertiary: {
          DEFAULT: "#e1e1e1",
          container: "#c4c5c5",
          fixed: "#e2e2e2",
          "fixed-dim": "#c6c6c7",
        },
        surface: {
          DEFAULT: "#101417",
          dim: "#101417",
          bright: "#363a3d",
          variant: "#313538",
          container: {
            lowest: "#0b0f12",
            low: "#181c1f",
            DEFAULT: "#1c2023",
            high: "#262a2e",
            highest: "#313538",
          },
        },
        on: {
          primary: "#09315c",
          "primary-container": "#32527f",
          secondary: "#2a3136",
          "secondary-container": "#b2b9c0",
          tertiary: "#2f3131",
          "tertiary-container": "#505252",
          surface: "#e0e3e7",
          "surface-variant": "#c3c6d0",
        },
        outline: {
          DEFAULT: "#8d919a",
          variant: "#43474f",
        },
        error: {
          DEFAULT: "#ffb4ab",
          container: "#93000a",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@container-queries/tailwindcss")],
};
export default config;