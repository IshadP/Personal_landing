/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      'bg' : '#101010',
      'text': '#F3D6D6',
      'text-fade': '#2B2B2B' 
    },
    fontFamily:{
      'SpaceMono': ['SpaceMono', 'sans-serif'],
      'PortSans': ['PortSans', 'sans-serif'],
    }
  },
  plugins: [],
}

