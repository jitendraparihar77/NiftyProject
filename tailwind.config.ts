/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(265.92deg, #839BF3 -4.17%, #C3DAFC 57.62%)',
      },
      animation: {
        bounce: 'bounce 2s infinite',
        // Custom animation
        bounceCustom: 'bounceCustom 2s infinite'
      },
      keyframes: {
        bounceCustom: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%': {
            transform: 'translateY(-30px)'
          },
          '60%': {
            transform: 'translateY(-15px)'
          }
        }
      }
    },
  },
  plugins: [],
};
