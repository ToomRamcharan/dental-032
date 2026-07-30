import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./pages/**/*{js,ts,jsx,tsx,mdx}', './components/**/*{js,ts,jsx,tsx,mdx}', './app/**/*{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { primary: { DEFAULT: '#18181b', rgb: '24,24,27' }, accent: { DEFAULT: '#71717a', rgb: '113,113,122' } }, fontFamily: { heading: ['Libre Baskerville', 'serif'], body: ['Inter', 'sans-serif'] } } },
  plugins: [],
};
export default config;