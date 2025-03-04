import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9FF',
        foreground: '#171717',
        primary: '#FCD240',
        secondary: '#eb222d',
        link: '#1E4AE9',
        button: '346AFF',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        subheading: ['var(--font-raleway)', 'sans-serif'],
        body: ['var(--font-roboto)', 'sans-serif'],
      },
      fontSize: {
        heading: ['24px', { lineHeight: '36px', fontWeight: '600' }],
        subheading: ['18px', { lineHeight: '24px', fontWeight: '500' }],
        body: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        regular: ['16px', { lineHeight: '24px', fontWeight: '400' }],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
