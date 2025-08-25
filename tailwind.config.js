/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#000000',
        'primary': '#FAFAFA',
        'secondary': '#8A2BE2',
        'accent': '#32CD32',
        'text-main': '#EAEAEA',
        'text-muted': '#A9A9A9',
        'card': 'rgba(255, 255, 255, 0.05)',
        'border': 'rgba(255, 255, 255, 0.1)',
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
        // This combined animation is for the hero image
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