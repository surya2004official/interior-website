/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F6F2',
          light: '#FBF9F6',
          dark: '#EFEAE2',
        },
        beige: {
          DEFAULT: '#E8E0D5',
          light: '#F3EEE6',
          dark: '#DDD2C3',
        },
        walnut: {
          DEFAULT: '#594536',
          light: '#6F5644',
          dark: '#443428',
        },
        gold: {
          DEFAULT: '#C5A47E',
          light: '#D5BC9D',
          dark: '#A78761',
          muted: 'rgba(197, 164, 126, 0.18)',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          700: '#2C2C2C',
          800: '#222222',
          900: '#141414',
          950: '#0D0D0D',
        },
        sand: '#F2ECE4',
        bronze: '#A88B6A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(26, 26, 26, 0.08), 0 0 1px 1px rgba(197, 164, 126, 0.1)',
        'luxury-hover': '0 30px 60px -15px rgba(26, 26, 26, 0.15), 0 0 2px 1px rgba(197, 164, 126, 0.25)',
        'gold-glow': '0 0 30px -5px rgba(197, 164, 126, 0.35)',
        'inner-luxury': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.35em',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
      },
    },
  },
  plugins: [],
}
