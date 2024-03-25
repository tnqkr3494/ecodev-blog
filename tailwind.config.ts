import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        title: "#d4a373",
        "small-title": "#FEFAE0",
        "p-color": "#ddbea9",
      },
      backgroundColor: {
        section1: "#ccd5ae",
        section2: "#e9edc9",
        card: "#faedcd",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("daisyui"),
    require("tailwindcss-intersect"),
  ],

  daisyui: {
    themes: [
      {
        halloween: {
          ...require("daisyui/src/theming/themes")["halloween"],
          ".btn-home": {
            height: "7rem",
            width: "14rem",
          },
        },
      },
      "autumn",
    ],
  },
};
export default config;
