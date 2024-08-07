import type { Config } from 'tailwindcss'
// import copy from './app/assets/copy.png';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      beige: '#D4BC8C',
      black: '#000000',
      blue: '#40545C',
      gold: '#D7A84A',
      gray: '#1f2937',
      green: '#747444',
      lightBeige: '#fde6b6',
      lightGray: '#4b5563',
      lightPrimaryRed: '#fca5a5',
      lightTeal: '#2dd4bf',
      medPrimaryRed: '#f87171',
      pink100: '#fce7f3',
      pink200: '#fbcfe8',
      primaryRed: '#dc2626',
      purple: '#6E494B',
      red: '#A02424',
      sky200: '#bae6fd',
      sky400: '#38bdf8',
      teal: '#14b8a6',
      violet: '#7c3aed',
      white: '#FFFFFF'
    },
    maxWidth: {
      '1/3': '33%',
      '7/10': '70%',
      '4/5': '80%',
      'full': '100%',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "grass": "url('/grass.png')",
      },
      backgroundSize: {
        '3/10': '30%',
        'contain': 'contain',
      },
      cursor: {
        'copy': 'url(/copy.png), pointer',
      }
    },
  },
  plugins: [],
}
export default config
