/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5E6D3',
        'dark-brown': '#2C1810',
        'gold': '#C9A96E',
        'deep-green': '#1B4332',
        'light-gold': '#E8D5A3',
        'off-white': '#FAF6F0',
        'charcoal': '#1A1A1A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'smoke': 'smoke 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(201, 169, 110, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(201, 169, 110, 0.6)' },
        },
        smoke: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1) translateX(0)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1) translateX(10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-banner.jpg')",
      },
    },
  },
  plugins: [],
}
