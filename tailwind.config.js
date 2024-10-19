/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js}',   
    './dist/**/*.{html,js}',  
    './new/**/*.{html,js}',   
    './password/**/*.{html,js}',  
    './quizGame/**/*.{html,js}', 
  ],

  future: {
    hoverOnlyWhenSupported: true, // Enable hover only when supported
  },
  
  theme: {
    extend: {
        
        keyframes: {
            "fade-in": {
                "0%": {
                    opacity: 0
                },
                "100%": {
                    opacity: 1
                },
            },
            "fade-out": {
                "0%": {
                    opacity: 1
                },
                "100%": {
                    opacity: 0
                },
            },
            "fade-in-down": {
                "0%": {
                    opacity: 0,
                    transform: "translate3d(0, -100%, 0)",
                },
                "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)",
                },
            },
            "fade-in-top-left": {
                "0%": {
                    opacity: 0,
                    transform: "translate3d(-100%, -100%, 0)",
                },
                "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)",
                },
            },
            "fade-in-top-right": {
                "0%": {
                    opacity: 0,
                    transform: "translate3d(100%, -100%, 0)",
                },
                "100%": {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)",
                },
            },

            "slide-in-down": {
                "0%": {
                    visibility: "visible",
                    transform: "translate3d(0, -100%, 0)",
                },
                "100%": {
                    transform: "translate3d(0, 0, 0)",
                },
            },
            "slide-in-left": {
                "0%": {
                    visibility: "visible",
                    transform: "translateX(-100%)",
                },
                "100%": {
                    transform: "translateX(0)",
                },
            },
            "slide-in-right": {
                "0%": {
                    visibility: "visible",
                    transform: "translateX(100%)",
                },
                "100%": {
                    transform: "translateX(0)",
                },
            },
            "slide-in-up": {
                "0%": {
                    visibility: "visible",
                    transform: "translate3d(0, 100%, 0)",
                },
                "100%": {
                    transform: "translate3d(0, 0, 0)",
                },
            },
            "slide-out-down": {
                "0%": {
                    transform: "translate3d(0, 0, 0)",
                },
                "100%": {
                    visibility: "hidden",
                    transform: "translate3d(0, 100%, 0)",
                },
            },
            "slide-out-left": {
                "0%": {
                    transform: "translate3d(0, 0, 0)",
                },
                "100%": {
                    visibility: "hidden",
                    transform: "translate3d(-100%, 0, 0)",
                },
            },
            "slide-out-right": {
                "0%": {
                    transform: "translate3d(0, 0, 0)",
                },
                "100%": {
                    visibility: "hidden",
                    transform: "translate3d(100%, 0, 0)",
                },
            },
            "slide-out-up": {
                "0%": {
                    transform: "translate3d(0, 0, 0)",
                },
                "100%": {
                    visibility: "hidden",
                    transform: "translate3d(0, -100%, 0)",
                },
            },
            "slide-down": {
                "0%": {
                    transform: "translate3d(0, 0, 0)",
                },
                "100%": {
                    transform: "translate3d(0, 100%, 0)",
                },
            },
            "slide-left": {
                "0%": {
                    transform: "translate3d(0, 0, 0)",
                },
                "100%": {
                    transform: "translate3d(-100%, 0, 0)",
                },
            },
            "slide-right": {
                "0%": {
                    transform: "translate3d(0, 0, 0)",
                },
                "100%": {
                    transform: "translate3d(100%, 0, 0)",
                },
            },
            "slide-up": {
                "0%": {
                    transform: "translate3d(0, 0, 0)",
                },
                "100%": {
                    transform: "translate3d(0, -100%, 0)",
                },
            },

        },

        animation: {
            fadein: 'fade-in 1s ease-in-out 0.25s 1',
            fadeout: 'fade-out 1s ease-out 0.25s 1',
            fadeindown: 'fade-in-down 1s ease-in 0.25s 1',
            fadeintopleft: 'fade-in-top-left 1s ease-out 0.25s 1',
            fadeintopright: 'fade-in-top-right 1s ease-out 0.25s 1',
            slideindown: 'slide-in-down 0.8s ease-in-out 0.25s 1',
            slideinleft: 'slide-in-left 1s ease-in-out 1s 1',
            slideinright: 'slide-in-right 1s ease-in-out 0.25s 1',
            slideinup: 'slide-in-up 1s ease-in-out 0.25s 1',
            slideoutdown: 'slide-out-down 1s ease-in-out 0.25s 1',
            slideoutleft: 'slide-out-left 1s ease-in-out 0.25s 1',
            slideoutright: 'slide-out-right 1s ease-in-out 0.25s 1',
            slideoutup: 'slide-out-up 1s ease-in-out 0.25s 1',
            slidedown: 'slide-down 1s ease-in-out 0.25s 1',
            slideleft: 'slide-left 1s ease-in-out 0.25s 1',
            slideright: 'slide-right 1s ease-in-out 0.25s 1',
            slideup: 'slide-up 1s ease-in-out 0.25s 1',
        },
    
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

        'xl': '1100px',
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

