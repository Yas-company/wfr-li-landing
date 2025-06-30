/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
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
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #009196, #F9A51A)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #F9A51A, #009196)',
        'gradient-primary-horizontal': 'linear-gradient(90deg, #009196, #F9A51A)',
        'hero-pattern': 'linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.95))',
        'ai-section': 'linear-gradient(to right, rgba(0, 145, 150, 0.05), rgba(249, 165, 26, 0.05))',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in-left': {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'slide-in-right': {
          'from': {
            opacity: '0',
            transform: 'translateX(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'scale-in': {
          'from': {
            opacity: '0',
            transform: 'scale(0.8)'
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      transitionDelay: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '1000': '1000ms',
      }
    },
  },
  plugins: [],
} 