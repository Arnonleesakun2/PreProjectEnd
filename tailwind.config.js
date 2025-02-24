/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        BgBanner: "url('/img/bg1.gif')",
      },
      boxShadow: {
        'custom': '0px 1px 10px rgba(0, 0, 0, 0.7)', // เงากำหนดเอง
      }
    },
  },
  plugins: [require("daisyui")],
};
