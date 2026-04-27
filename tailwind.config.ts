import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080d1a',
        bg2: '#0d1628',
        bg3: '#111c35',
        blue: '#2d7ff9',
        'blue-dark': '#1a5fd4',
        'blue-glow': 'rgba(45,127,249,0.15)',
        text: '#e8edf8',
        muted: '#8a96b0',
        subtle: 'rgba(255,255,255,0.07)',
        accent: 'rgba(45,127,249,0.3)',
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.07)',
        accent: 'rgba(45,127,249,0.3)',
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
