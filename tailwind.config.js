/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#000000',      // True black for a sleek look
        'primary': '#FAFAFA',         // Off-white for primary text and elements
        'secondary': '#8A2BE2',       // A vibrant blue-violet
        'accent': '#32CD32',          // A bright lime green for accents
        'text-main': '#EAEAEA',       // Light gray for main text
        'text-muted': '#A9A9A9',      // Softer gray for secondary text
        'card': 'rgba(255, 255, 255, 0.05)',
        'border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        // Using more modern, stylish fonts
        sans: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      cursor: {
        // Defining a custom cursor
        'fancy': 'url(/cursor.svg), auto',
      },
      animation: {
        'aurora': 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
    },
  },
  plugins: [],
};
