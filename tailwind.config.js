/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        'russo-one':['"Russo One"', 'sans-serif']
      },

      colors:{
        //black-pearl
        'azul-medianoche': {
          '50': '#f3f7fc',
          '100': '#e5eff9',
          '200': '#c5ddf2',
          '300': '#93c1e6',
          '400': '#59a1d7',
          '500': '#3486c3',
          '600': '#246aa5',
          '700': '#1e5586',
          '800': '#1d486f',
          '900': '#1d3e5d',
          '950': '#0d1b2a',
        },
        //orange-peel
        'amarillo-neon': {
          '50': '#fff9eb',
          '100': '#ffedc6',
          '200': '#ffd988',
          '300': '#ffbf4a',
          '400': '#ffa41b',
          '500': '#f98207',
          '600': '#dd5d02',
          '700': '#b73e06',
          '800': '#942f0c',
          '900': '#7a270d',
          '950': '#461202',
        },
        //heather
        'gris-plateado': {
          '50': '#f5f7f9',
          '100': '#e9ebf0',
          '200': '#d8dde5',
          '300': '#b8c1d1',
          '400': '#9ca7be',
          '500': '#848fad',
          '600': '#727b9e',
          '700': '#666c8f',
          '800': '#565a77',
          '900': '#484b60',
          '950': '#2f313c',
        },
        //concrete
        'blanco-hueso': {
          '50': '#f8f8f8',
          '100': '#f2f2f2',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },

      }
    },
  },
  plugins: [],
}

