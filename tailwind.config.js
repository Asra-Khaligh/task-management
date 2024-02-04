/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      width: {
        '296': '296px',
        '340': '340px',
        '1' :'1px',
        '308' :'308px',
        '848' :'848px'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'bgSubtask' : '#D9D9D9',
      'black' : '#000000',
      'blue' : "#0500ff",
      'coverSubtask' : "#030028",
      'bgTask' : '#786790',
      'bgStatus' : '#413B49',
    },
  },
  plugins: [],
}

