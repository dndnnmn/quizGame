/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js}',   
    './dist/**/*.{html,js}',  
    './new/**/*.{html,js}',   
    './password/**/*.{html,js}',  
  ],
  
  theme: {
    extend: {
    
      fontFamily: {
        body: ['Poppins'],
        ver: ['Verdana'],
      },

      padding:{
        '10%': '10%',
      },

      colors:{
        'nero' : '#161414',
      },

      screens: {
        
       
        'tablet': '766px',
        // => @media (min-width: 640px) { ... }
        
         
  

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1080px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

