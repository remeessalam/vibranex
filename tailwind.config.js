/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#027dc0",
        secondary: "#86c227",
        tertiary: "#0A1828",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg, rgba(2,125,192,1) 0%, rgba(134,194,39,1) 100%);",
      },
    },
  },
  plugins: [],
};
