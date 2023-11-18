/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "movieAlbum":'url("./src/assets/postermovieimg.jpg")',
        "movieSearchAlbum":'url("./src/assets/postermoviesearchimg.jpg")'
      },
    screens:{
      xs:"300px"
    }
    },
  },
  plugins: [],
}

