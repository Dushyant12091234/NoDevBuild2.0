/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0D1117', // A deep, dark navy
        'primary': '#FFFFFF',    // Bright white for high contrast
        'secondary': '#8A2BE2',  // Kept the vibrant purple
        'accent': '#00BFFF',      // A cool, electric blue
        'text-main': '#E6EDF3',   // Off-white for main text
        'text-muted': '#8D96A0',  // Muted gray for secondary text
        'card': 'rgba(22, 27, 34, 0.8)', // Semi-transparent dark card background
        'border': 'rgba(48, 54, 61, 0.8)', // Subtle border color
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      cursor: {
        'fancy': 'url(/cursor.svg), auto',
      },
      animation: {
        'aurora': 'aurora 60s linear infinite',
        'hero-visual': 'fade-in-up 0.8s ease-out forwards, float 4s ease-in-out infinite 0.8s',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
};