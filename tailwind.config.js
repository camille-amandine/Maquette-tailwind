/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
  extend: {

    backgroundImage:{
        'orange': "url('../images/desktop/image-header.jpg')",
        'cerise': "url('../images/desktop/image-graphic-design.jpg')",
        'mandarine': "url('../images/desktop/image-photography.jpg')",
      }

    },
  },
  plugins: [],
}
