/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        vibes: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        blanco: '#FFFFFF',
        cremarustico: '#F7F4ED',
        verdeClaro: '#A3A867',
        verdeOscuro: '#556B2F',
        dorado: '#B29700',
        madera: '#DEB887',
        marron: '#5C4033',
        beige: '#E8D8C4',
      },
    },
  },
  plugins: [],
}

