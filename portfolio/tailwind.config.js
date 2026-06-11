/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FFFBFC',
        ink: '#1C1C1C',
        muted: '#6B6560',
        line: '#E8E4E6',
        blush: '#F9DDE8',
        rose: '#D4869C',
        mint: '#D4E8D4',
        sage: '#9BB89B',
        accent: '#D4869C',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
