/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004BBD',  
          dark: '#1E3A8A', 
        },
        accent: {
          DEFAULT: '#F97316', 
        },
        text: {
          primary: '#000000',  
          secondary: '#4B5563', 
        },
        background: {
          light: '#F6E9E9',   
          default: '#FFFFFF',  
          footer: '#B55252',
        },
        error: '#DC2626', 
      },
       
    },
  },
  plugins: [],
}



