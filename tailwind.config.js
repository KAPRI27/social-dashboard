/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'tailwindcss'  //agregamos esta linea 

export default defineConfig({  // agregamos defineConfig
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    // content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [
    
    ],
  })