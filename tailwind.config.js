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
        gov: {
          navy: '#0B132B',
          navyDark: '#050A17',
          blue: '#2563EB',
          blueHover: '#1D4ED8',
          blueLight: '#60A5FA',
          sky: '#EFF6FF',
          saffron: '#F97316',
          saffronLight: '#FFEDD5',
          saffronDark: '#C2410C',
          green: '#10B981',
          greenLight: '#D1FAE5',
          greenDark: '#047857',
          slateBg: '#080D1A',
          cardBg: 'rgba(15, 23, 42, 0.65)',
          border: 'rgba(255, 255, 255, 0.12)',
          borderFocus: 'rgba(96, 165, 250, 0.5)',
          textMain: '#F8FAFC',
          textMuted: '#94A3B8',
          ashoka: '#000080',
        }
      },
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gov-sm': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'gov-md': '0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'gov-lg': '0 16px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        'gov-glow': '0 0 30px -4px rgba(37, 99, 235, 0.35)',
        'gov-saffron-glow': '0 0 25px -2px rgba(249, 115, 22, 0.4)',
        'gov-green-glow': '0 0 25px -2px rgba(16, 185, 129, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.18) 0%, rgba(15, 23, 42, 0) 70%)',
        'saffron-gradient': 'radial-gradient(circle at 100% 50%, rgba(249, 115, 22, 0.12) 0%, rgba(15, 23, 42, 0) 60%)',
      },
      keyframes: {
        pulseWave: {
          '0%, 100%': { transform: 'scaleY(0.4)', opacity: '0.6' },
          '50%': { transform: 'scaleY(1)', opacity: '1' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(15px, -20px) scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        'pulse-wave': 'pulseWave 1.2s ease-in-out infinite',
        'orb-float': 'orbFloat 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
      }
    },
  },
  plugins: [],
}
