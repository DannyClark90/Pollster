/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#7A8D65",
        secondary: "#5F6A53",
        tertiary: "#93B173",
        tertiary1: "#B0AF72",
        tertiary2: "#E1D9D5",
        tertiary3: "#E8E8E3",
        tertiary4: "#F4F0F2",
        black: "#000000",
        white: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
