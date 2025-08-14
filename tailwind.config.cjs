/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: { 
        primary: "#009196", 
        secondary: "#F9A51A",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
        button: "8px",

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #009196, #F9A51A)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #F9A51A, #009196)',
        'hero-pattern': 'linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.95))',
        'ai-section': 'linear-gradient(to right, rgba(0, 145, 150, 0.05), rgba(249, 165, 26, 0.05))',
      },
    }
    },
  },
  plugins: [],
}