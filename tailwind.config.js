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
        "blue-600": "rgba(45, 55, 87, 4)",
        "purple-500": "rgba(119, 81, 253, 1)",
      },

      scrollbar: {
        none: {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
    },
  },
  plugins: [],
};
