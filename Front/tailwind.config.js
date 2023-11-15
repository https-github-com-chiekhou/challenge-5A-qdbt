
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { 50: "#fbeee6", 400: "#ff8b46", 900: "#883301" },
        gray: {
          50: "#fff9f6",
          300: "#dbdbdb",
          400: "#c4c4c4",
          600: "#6e6e6e",
          700: "#626262",
          900: "#191919",
          "50_01": "#fff9f5",
          "50_02": "#f9fdff",
          "900_cc": "#191919cc",
          "600_01": "#787878",
          "400_01": "#c0c0c0",
        },
        blue_gray: {
          100: "#d6d6d6",
          600: "#406f85",
          "100_01": "#cfcfcf",
          "100_02": "#d9d9d9",
          "300_33": "#91aebb33",
        },
        red: { 100: "#ecd6c8", "100_01": "#ffe0ce" },
        black: { 900: "#000000" },
        orange: { A700: "#fd650b" },
        yellow: { 50: "#fff7f0" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { manrope: "Manrope", markoone: "Marko One" },
      boxShadow: { bs: "0px 30px  30px 0px #91aebb33" },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};