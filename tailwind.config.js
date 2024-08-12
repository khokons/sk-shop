/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
      colors: {
        'cyan-500': '#06b6d4',
        'pink-500': '#ec4899',
        'red-500': '#ef4444',
        'yellow-500': '#f59e0b',
        'purple-500': '#a855f7',
        'orange-500': '#f97316',
        'sublime-500': '#FC466B',
        'vivid-500': '#3F5EFB',
        'blue-500': '#3B82F6',
        'green-500': '#10B981',
      },
      boxShadow: {
        'text-shadow': '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    require('daisyui'),
    function({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-image': 'linear-gradient(to right, #06b6d4, #ec4899)',
        },
        '.gradient-text-2': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'background-image': 'linear-gradient(to right, #a855f7, #f97316)',
        },
        '.gradient-btn': {
          'color': 'black',
          'border-style': 'none',
          'background-image': 'linear-gradient(to right, #ef4444, #f59e0b)',
        },
        '.gradient-bg': {
          'background-image': 'linear-gradient(to right, #FC466B, #3F5EFB)',
        },
        '.gradient-bg-2': {
          'background-image': 'linear-gradient(to right, #10B981, #3B82F6)',
        },
        '.text-shadow': {
          'text-shadow': '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.5)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
