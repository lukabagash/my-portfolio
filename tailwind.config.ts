/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    // If you have any other folders with components,
    // add them here as well.
  ],
  theme: {
    extend: {
      // Example of a fancy gradient background
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-custom':
          'linear-gradient(120deg, #ff6b6b, #f4d35e, #ee964b, #c52727)',
      },
      // Define custom keyframes for background panning or color shifts
      keyframes: {
        'bg-pan': {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '100% center' },
        },
      },
      animation: {
        'bg-pan': 'bg-pan 12s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
