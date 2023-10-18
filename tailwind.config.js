/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-color": "#040f16",
        "light-color": "#fbfbff",
        "primary-color": "#01baef",
        "primary-color-dark": "#0b4f6c",
        "secondary-color": "#b80c09",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
