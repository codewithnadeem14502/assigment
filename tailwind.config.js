/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      mobile: {
        min: "376px",
        max: "390px",
      },
      bigmobile: {
        min: "391px",
        max: "430px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        md: "620px",
      },
      backgroundColor: {
        "blue-900": "rgba(49, 60, 92, 1)",
        "blue-500": "rgba(93, 158, 255, 1)",
      },
    },
  },
  plugins: [],
};
