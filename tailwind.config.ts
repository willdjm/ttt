import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gray': {
          300: '#F2F2F2'
        },
        'purple': {
          500: '#9747FF'
        },
        'blue': {
          200: '#92B7D4',
          300: '#B8DBF6', 
          400: '#2B71B9'          
        },
      },
    },
  },
  plugins: [],
}
export default config
