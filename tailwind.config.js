/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      mobile: {
        min: "376px",
        max: "390px", // Adjust this value based on your design needs
      },
      bigmobile: {
        min: "391px",
        max: "430px", // Adjust this value based on your design needs
      },
      // 430
      // 426->table/md
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        md: "620px",
      },
    },
  },
  plugins: [],
};
