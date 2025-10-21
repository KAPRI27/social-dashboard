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
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'very-pale-blue': 'hsl(208, 100%, 97%)',
        'very-dark-blue': 'hsl(230, 17%, 14%);',
        'very-dark-blue-top': 'hsl(232, 19%, 15%)',
        'dark-desaturated-blue': 'hsl(229, 27%, 20%)',
        'desaturated-blue': 'hsl(228, 34%, 66%)',
        'light-grayish-blue': 'hsl(228, 50%, 96%)',
        'dark-grayish-blue': 'hsl(229, 12%, 44%)',
        instagInicio: 'hsl(37, 97%, 70%)',
        instagFin: 'hsl(5, 77%, 71%)',
        toggleInicio: 'hsl(180, 52%, 55%)',
        toggleFin: 'hsl(123, 76%, 53%)',
      }, 
      fontFamily: {
        Inter : ['Inter'],
      }
    },
  },
  plugins: [
    
  ],
}