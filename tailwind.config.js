/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/rizzui/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var(--font-lato-sans)'],
      },
      colors: {
        mainWhite: '#FFFFFF',
        mainBlack: '#000000',
        mainGray: '#777777',
        primary: '#289BDE',
        lightestBlue: '#F4FAFD',
      },
      backgroundImage: {
        Herobg: "url('/Herobg.png')",
      },
      boxShadow: {
        'custom-primary': '4px 4px 25px 0 rgba(90, 103, 216, 0.2)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
