import type { Config } from 'tailwindcss';
// We need the defaultTheme to extend it, not replace it.
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  // --- FIX 1: Corrected content paths to look inside the 'src' directory ---
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        'avenir-medium': '500'
      },
      fontFamily: {
         avenir: ['"Avenir"', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
};

export default config;
