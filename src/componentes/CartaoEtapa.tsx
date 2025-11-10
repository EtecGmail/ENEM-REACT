import type { ReactNode } from 'react';

export interface CartaoEtapaProps {
  numero: number;
  titulo: ReactNode;
  descricao: ReactNode;
}

/**
 * Componente de cartão usado na seção "Como funciona".
 */
export default function CartaoEtapa({ numero, titulo, descricao }: CartaoEtapaProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">
        {numero}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{titulo}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{descricao}</p>
    </article>
  );
}