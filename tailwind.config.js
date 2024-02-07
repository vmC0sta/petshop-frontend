/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        branco: "var(--branco)",
        laranja: "var(--laranja)",
        amarelo: "var(--amarelo)",
        amarelo_laranja:"var(--amarelo-laranja)",
        texto_preto: "var(--texto-preto)",
        preto_negrito:"var(--preto-negrito)", 
        botao_cinza: "var(--botao-cinza)",
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}