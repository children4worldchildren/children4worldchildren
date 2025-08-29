/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
      display: ['Poppins', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            fontFamily: 'Poppins, sans-serif',
            h1: {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
            },
            h3: {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '500',
            },
          },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-x-slow': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
};
