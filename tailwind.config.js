/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "rgba-primary": "rgba(93, 158, 255, 1)",
        "rgba-secondary": "rgba(119, 81, 253, 1)",
      },
    },
  },
  plugins: [],
};
