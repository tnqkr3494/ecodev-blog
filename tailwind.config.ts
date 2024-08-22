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
      keyframes: {
        borderAnimation: {
          "0%": { borderColor: "#FF5733" }, // 주황색
          "25%": { borderColor: "#33FF57" }, // 녹색
          "50%": { borderColor: "#3357FF" }, // 파란색
          "75%": { borderColor: "#FF33A6" }, // 핑크색
          "100%": { borderColor: "#FF5733" }, // 주황색으로 돌아감
        },
      },
      animation: {
        borderAnimation: "borderAnimation 5s infinite", // 애니메이션 설정
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
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
