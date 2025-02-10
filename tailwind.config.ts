import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primary_colar:'#692BEF',
       primary_colar_500:'#824EF2',
       default_white:'#FFFFFF',
       secondary_colar:'#FFCA64',
       base_white:'#FAFAFA',
       cold_green:'#45E0A8',
       base_black:'#1B223C',
       naturale_1300:'#5F595A',
       pink_color:'#FF7AD1',
       move:'#B880FF'

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(87deg, #FF7AD1 6.66%, #FFCA64 94.88%)',
        'custom-gradien2': 'linear-gradient(240deg, #FFF -1.37%, #FFF 100.15%)',
        'custom-gradien3': 'linear-gradient(270deg, #FF7AD1 0%, #FFCA64 40%, rgba(105, 43, 239, 0.00) 100%)',
        'custom-gradien4': 'linear-gradient(90deg, rgba(105, 43, 239, 0) 0%, #FF7AD1 23.86%, #FFCA64 67.33%, rgba(105, 43, 239, 0) 100%)',
        'custom-gradien5': 'linear-gradient(180deg, #373E4F 0%, #1B223C 100%)',
        
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
} satisfies Config;
