/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#151414",
          primary: "#252525",
        },
        reeva: {
          1: "#3C8ACA",
          2: "#70A5D1",
          3: "#2E97EE",
          4: "#78C0FC",
          5: "#ACE6FF"
        },
        nst: {
          1: "#AEE6CB",
          2: "#85D4BE",
          3: "#96DFD8",
          4: "#DAF1DE",
          5: "#C3DDE0"
        }
      },
      fontFamily: {
        primary: "Fredoka One, cursive",
        secondary: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
