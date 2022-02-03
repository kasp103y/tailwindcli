module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(bogen/bogen-blaa.jpg)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
