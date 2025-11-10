import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite no formato ESM/TypeScript.
// A utilização da extensão .mts evita o modo CommonJS depreciado e alinha o
// projeto com a API moderna do Vite. Para detalhes adicionais, consulte
// https://vitejs.dev/config/.
export default defineConfig({
  plugins: [react()],
});