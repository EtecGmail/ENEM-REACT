import type { ReactNode } from 'react';
import { juntarClasses } from '../utils/juntarClasses';

export interface SecaoProps {
  /**
   * Identificador HTML para permitir navegação por âncoras.
   */
  id?: string;
  /**
   * Tom de fundo da seção. Pode ser: "padrao" (branco), "cinza", "azul" ou "hero".
   */
  tom?: 'padrao' | 'cinza' | 'azul' | 'hero';
  /**
   * Centralizar conteúdo horizontalmente.
   */
  centralizar?: boolean;
  children: ReactNode;
}

/**
 * Componente de layout de seção. Aplica paddings e cores de fundo consistentes.
 *
 * Conforme o guia Método Amarelo, utiliza classes utilitárias Tailwind, mas as combinações
 * são encapsuladas aqui para evitar poluição de outras partes do código.
 */
export default function Secao({ id, tom = 'padrao', centralizar = false, children }: SecaoProps) {
  const base = 'px-4 sm:px-6 lg:px-8 py-16';
  const fundo =
    tom === 'cinza'
      ? 'bg-gray-50'
      : tom === 'azul'
      ? 'bg-blue-600'
      : tom === 'hero'
      ? 'bg-gradient-to-br from-blue-50 to-white'
      : 'bg-white';
  const alinhamento = centralizar ? 'text-center' : '';
  return (
    <section id={id} className={juntarClasses(base, fundo)}>
      <div className={juntarClasses('max-w-6xl mx-auto', alinhamento)}>{children}</div>
    </section>
  );
}