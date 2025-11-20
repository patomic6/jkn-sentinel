/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Gunakan ini, BUKAN 'tailwindcss'
    autoprefixer: {},
  },
}