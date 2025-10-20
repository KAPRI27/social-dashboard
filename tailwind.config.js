/** @type {import('tailwindcss').Config} */

export default { 
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {

        white: 'hsl(0, 0%, 100%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        youtube: 'hsl(348, 97%, 39%)',
        toggle: 'hsl(230, 22%, 74%)',
        'lime-green': 'hsl(133, 61%, 41%)',
        'bright-red': 'hsl(354, 70%, 54%)',
        'very-pale-blue': 'hsl(208, 100%, 97%)',
        'very-dark-blue': 'hsl(230, 17%, 14%);',
        'very-dark-blue-top': 'hsl(232, 19%, 15%)',
        'dark-desaturated-blue': 'hsl(229, 27%, 20%)',
        'desaturated-blue': 'hsl(228, 34%, 66%)',
        'light-grayish-blue': 'hsl(228, 50%, 96%)',
        'dark-grayish-blue': 'hsl(229, 12%, 44%)',
        instagInicio: 'hsl(44, 93%, 50%)',
        instagFin: 'hsl(345, 96%, 45%)',
        toggleInicio: 'hsl(180, 52%, 55%)',
        toggleFin: 'hsl(123, 76%, 53%)',
      }
    },
  },
  plugins: [
    
  ],
}