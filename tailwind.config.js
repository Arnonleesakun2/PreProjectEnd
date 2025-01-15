/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        BgBanner: "url('/img/bg1.gif')",
      },
    },
  },
  plugins: [require("daisyui")],
};
