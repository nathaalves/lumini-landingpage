import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        internal: `
          rgba(251, 168, 0, 0.9) 0px -43px 25px 0px inset,
          rgba(251, 168, 0, 0.70) 0px -76px 30px 0px inset,
          rgba(251, 168, 0, 0.5) 0px -160px 40px 0px inset,
          rgba(251, 168, 0, 0.06) 0px 2px 1px,
          rgba(251, 168, 0, 0.09) 0px 4px 2px,
          rgba(251, 168, 0, 0.09) 0px 8px 4px,
          rgba(251, 168, 0, 0.09) 0px 16px 8px,
          rgba(251, 168, 0, 0.09) 0px 32px 16px
        `
      },
      colors: {}
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')]
} satisfies Config
