/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#7A8D65',
        secondary: '#5F6A53',
        tertiary: '#93B173',
        tertiary1: '#B0AF72',
        tertiary2: '#E1D9D5',
        tertiary3: '#E8E8E3',
        tertiary4: '#F4F0F2',
        black: '#000000',
        white: '#F5F5F5',
      },
      screens: {
        xxs: '343px',
        xs: '390px', // Extra small devices
        sm: '640px', // Small devices
        md: '768px', // Medium devices
        lg: '1024px', // Large devices
        xl: '1280px', // Extra large devices
        '2xl': '1536px', // 2 Extra large devices
        '3xl': '1600px', // Custom breakpoint
      },
      fontSize: {
        'lg-h1': ['6rem', { lineHeight: '2.5rem', fontWeight: '700' }],
      },
      fontFamily: {
        h1: ['Bebas Neue', 'sans-serif'],
      },
      letterSpacing: {
        'lg-h1': '0.5rem',
      },
    },
  },
  plugins: [],
}
