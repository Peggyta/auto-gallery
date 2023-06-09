/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'neoncar': "url('../public/assets/neoncar.jpg')",
      },
    },
  },
  plugins: [],
}
