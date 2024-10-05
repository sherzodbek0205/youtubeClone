/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
   extend: {
      // Add custom scrollbar styles
      scrollbar: {
        thin: {
          'scrollbar-width': 'thin', /* For Firefox */
          '&::-webkit-scrollbar': {
            height: '4px', /* Height for horizontal scroll */
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#f56565', /* Thumb color */
            borderRadius: '10px',
          },
        },
      },
    },

  },
  plugins: [],
}