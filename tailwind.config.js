/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#ffffff",     
          "base-content": "#000000",   
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "#000000",       // pure black
          "base-content": "#ffffff",   // pure white text
        },
      },
    ],
  },
};
