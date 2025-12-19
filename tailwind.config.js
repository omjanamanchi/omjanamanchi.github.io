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
        // Modern Tech Dark Theme
        bg: {
          primary: '#0D1117',
          surface: '#161B22',
          elevated: '#1C2128',
        },
        accent: {
          cyan: '#58A6FF',
          purple: '#A371F7',
          green: '#3FB950',
          red: '#F85149',
          yellow: '#D29922',
          blue: '#1F6FEB',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        border: {
          subtle: 'rgba(240, 246, 252, 0.08)',
          default: 'rgba(240, 246, 252, 0.15)',
          strong: 'rgba(240, 246, 252, 0.25)',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Cascadia Code', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-2xl': '4.5rem',
        'display-xl': '3.75rem',
        'display-lg': '3rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #58A6FF 0%, #00D9FF 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(88, 166, 255, 0.15) 0%, rgba(0, 217, 255, 0.15) 100%)',
      },
      boxShadow: {
        'cyan-sm': '0 1px 2px 0 rgba(88, 166, 255, 0.1)',
        'cyan-md': '0 4px 6px -1px rgba(88, 166, 255, 0.15)',
        'cyan-lg': '0 10px 15px -3px rgba(88, 166, 255, 0.2)',
        'cyan-xl': '0 20px 25px -5px rgba(88, 166, 255, 0.25)',
        'glow-cyan': '0 0 25px rgba(88, 166, 255, 0.4), 0 0 50px rgba(0, 217, 255, 0.2)',
        'glow-purple': '0 0 25px rgba(163, 113, 247, 0.4)',
        'glow-blue': '0 0 30px rgba(88, 166, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
