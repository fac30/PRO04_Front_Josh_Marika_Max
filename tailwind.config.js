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
          primary: '#08260B',  
          secondary: '#4B5563', 
        },
        background: {
          light: '#E67771',   
          default: '#F5F5F5',  
          footer: '#E44C3B',
          
        },
        error: '#DC2626', 
      },
       
    },
  },
  plugins: [],
}



