/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "white-text": "#ffffff",
      "dark-background": "#000000",
      "facebook": "#2374E1",
      "instagram": "linear-gradient(#F38334, #DA2E7D, #6B54C6)",
      "twitter": "#55ACEE",
      "linkedin": "#0A66C2",
      "github": "#161B22",
      "primary": "#FF0000",
      "secondary": "#950101",
      "third": "#161B22",
    },
    extend: {
      width: {
        "pi": "5.625rem"
      },
      height: {
        "pi": "5.625rem"
      },
      backgroundImage: {
        "gradient": "linear-gradient(-90deg, #950101, #FF0000)"
      }
    },
  },
  plugins: [],
}
