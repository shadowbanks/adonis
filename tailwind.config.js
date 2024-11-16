/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#252727",
        priamry: "#0094FF",
        secondary: "#060606",
        active_menu: "#8170EC",
        menu_primary: "#F6F6F6",
        menu_secondary: "#D9D9D9",
        primary_text: "#7C7C7C",
        button_green: "#00FF00",
        button_red: "#F25050",
        line_color: "#D0CECE",
        pro_color: "#221DF1",
      },
    },
  },
  plugins: [],
};
