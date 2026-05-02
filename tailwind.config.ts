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
        bg: '#06080f',
        bg2: '#0d1120',
        bg3: '#111c35',
        blue: '#3d6aff',
        'blue-bright': '#5c85ff',
        'blue-dark': '#2952cc',
        'blue-glow': 'rgba(61,106,255,0.35)',
        text: '#e8ecff',
        muted: 'rgba(180,195,255,0.5)',
        subtle: 'rgba(99,130,255,0.12)',
        accent: 'rgba(61,106,255,0.4)',
      },
      borderColor: {
        subtle: 'rgba(99,130,255,0.12)',
        accent: 'rgba(61,106,255,0.4)',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
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
