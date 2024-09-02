/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode:"jit",

  theme: {
    container: {
      padding:{
        DEFAULT:"15px",
      }
    },  

  screens:{
     sm:"640px", 
     md:"768px", 
     lg:"960px", 
     xl:"1310px"
  },
        extend: {
       backgroundImage:{
        singerOverlay:"url(/assets/hero/singer-overlay.png)",
        newleates:"url(/assets/newsletter/bg.png)"
        }, 
        fontFamily: {
          primaryText:['var(--font-alex_brush)'  ],
          secondaryText :['var(--font-montserrat)' , ],
          mainfont: "Poppins", 
        }, 
        colors:{
          primaryColor:"#06062A",
          secondaray:"#151538", 
          tertiary:"#242445", 
          accent:{
            DEFAULT:'#7f1cfc', 
            hover:'#6519c6'
          }
        }
    },
  },
  plugins: [
    require( "tailwind-scrollbar")
  ],
};
