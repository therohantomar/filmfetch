/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "movieAlbum":'url("./public/postermovieimg.jpg")',
        "movieSearchAlbum":'url("./public/postermoviesearchimg.jpg")'
      },
    screens:{
      xs:"300px"
    }
    },
  },
  plugins: [],
}

