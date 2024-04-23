/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg': "url('../src/assets/image 6.png')",
      },
      fontFamily:{
        brico: "'Bricolage Grotesque', serif",
        dmsans: " 'DM Sans', serif "
      },
      colors:{
        'primary':'#17004A',
        'text': '#FFFFFF',
        'service': '#564A72',
        'service-background': '#F3FBF8',
        'service-card':'#FFF',
        'popular-colour':'#003A26',
        'btn-primary':'#003588',
        'question-background':'#FFF3E6',
        'question-primary':'#FF8600',
        'title-colour':'#201F1F'

      }
    },
  },
  plugins: [],
}

