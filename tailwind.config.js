/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Military/Defense themed color palette
        tactical: {
          black: '#0a0a0a',
          dark: '#1a1a1a',
          slate: '#1e293b',
          gray: '#334155',
          'gray-light': '#475569',
        },
        military: {
          green: '#3d4a2b',
          'green-dark': '#2d3a1b',
          'green-light': '#4d5a3b',
          olive: '#545d3f',
          'olive-dark': '#3f4730',
          'olive-light': '#6d7556',
        },
        accent: {
          red: '#8b2e2e',
          'red-dark': '#6b1e1e',
          'red-light': '#a03e3e',
          green: '#4d5a3b',
          'green-dark': '#3d4a2b',
          steel: '#6b7280',
          'steel-light': '#9ca3af',
        },
        surface: {
          dark: '#0f1410',
          'dark-elevated': '#1a201a',
          light: '#f8fafc',
          'light-elevated': '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
        'topo-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm-20 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z' fill='%231e293b' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
