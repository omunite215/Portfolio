import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        YellowPrimaryBg: "#f5f5e5",
        PurpleTheme: "#aa77fb",
        PinkTheme: "#fb578b",
        StrongYellowBg: "#FFFF00",
        LimeTheme: "#bef264",
        RoseTheme: "#e11d48",
        GreenTheme: "#16a34a",
        AmberTheme: "#d97706"
      },
      fontFamily: {
        kepler: ["kepler-std-semicondensed-dis", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
export default config;
