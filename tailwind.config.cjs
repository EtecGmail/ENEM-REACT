/* Tailwind CSS configuração
 * O conteúdo inclui todos os arquivos TSX na pasta src.
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primaria': 'var(--cor-primaria)',
        'primaria-hover': 'var(--cor-primaria-hover)',
        'secundaria': 'var(--cor-secundaria)',
        'secundaria-hover': 'var(--cor-secundaria-hover)',
        'fundo': {
          'claro': 'var(--cor-fundo-claro)',
          'escuro': 'var(--cor-fundo-escuro)',
        },
        'texto': {
          'primaria': 'var(--cor-texto-primaria)',
          'secundaria': 'var(--cor-texto-secundaria)',
          'clara': 'var(--cor-texto-clara)',
        },
      },
    },
  },
  plugins: [],
};