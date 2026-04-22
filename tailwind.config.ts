import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm cream canvas — never pure white
        cream: {
          50: '#FAF6EF',
          100: '#F4EEE2',
          200: '#E9DFCB',
          300: '#D9C9A9',
          400: '#BDA784',
        },
        // Deep plum ink — night-club rich, never pure black
        plum: {
          950: '#15080F',
          900: '#1E0E18',
          800: '#2A1624',
          700: '#3B2132',
          600: '#523048',
          500: '#6E4362',
          400: '#8F6082',
          300: '#AF85A4',
          200: '#CBAAC2',
          100: '#E3CFDE',
          50: '#F2E5EE',
        },
        // Electric coral — dance-floor accent
        coral: {
          950: '#2E0819',
          900: '#4A0F27',
          800: '#6F1A3B',
          700: '#972654',
          600: '#BC336B',
          500: '#D94A85',
          400: '#E56C9E',
          300: '#EE93B8',
          200: '#F5B8D0',
          100: '#FBDBE7',
          50: '#FDEDF3',
        },
        // Electric secondary — glow hint for Clubbercise vibe
        volt: {
          500: '#7A5AF8',
          400: '#9A82FA',
          300: '#BAA8FB',
          200: '#D7CCFD',
          100: '#ECE6FE',
        },
      },
      fontFamily: {
        heading: ['var(--font-serif)', 'Fraunces', 'Georgia', 'serif'],
        body: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
