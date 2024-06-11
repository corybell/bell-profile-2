import type { Config } from 'tailwindcss'
import { white, black, slate } from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#06BA8C',
      accent: '#34414D',
      white: white,
      black: black,
      slate: slate,
    },
  },
  plugins: [],
}
export default config
