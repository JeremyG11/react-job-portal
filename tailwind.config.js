/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-about": "url('../src/assets/meeting-room.jpg')",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(250px, 3fr))",
      },
      fontFamily: {
        rokkitt: ["Rokkitt", "serif"],
        comfortaa: ["Comfortaa"],
        nunito: ["Nunito Sans", "sans-serif"],
        poppins: ["Poppins", "san-serif"],
        roboto: ["Roboto", "san-serif"],
      },
      lineClamp: {
        2: "line-clamp-2",
        3: "line-clamp-3",
        4: "line-clamp-4",
      },
    },
  },
  plugins: [],
};
