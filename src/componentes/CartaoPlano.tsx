import type { ReactNode } from 'react';
import Botao from './ui/Botao';
import { juntarClasses } from '../utils/juntarClasses';

export interface Plano {
  nome: string;
  preco: string;
  periodo: string;
  redacoes: string;
  prazo: string;
  recursos: string[];
  destaque: boolean;
}

export interface CartaoPlanoProps {
  plano: Plano;
}

const textoHorasUteis =
  'Horas úteis: horas contabilizadas dentro do nosso horário de atendimento, de segunda a sábado, das 9h às 18h. O prazo começa a contar a partir da confirmação de envio da redação';

const textoFluxoAtivacao =
  'Em breve: Ao assinar, você poderá criar sua conta, escolher a forma de pagamento e ter acesso imediato à plataforma após a confirmação.';

/**
 * Cartão de plano com destaque opcional e nota explicativa sobre horas úteis.
 */
export default function CartaoPlano({ plano }: CartaoPlanoProps) {
  const borda = plano.destaque ? 'border-secundaria' : 'border-transparent';
  return (
    <section
      aria-label={`Plano ${plano.nome}`}
      className={juntarClasses(
        'bg-white rounded-3xl shadow-xl overflow-hidden mb-8 border-2 relative',
        borda
      )}
    >
      {plano.destaque && (
        <div className="absolute top-0 right-0 bg-secundaria text-white py-1 px-4 text-xs font-medium rounded-bl-lg">
          MAIS ESCOLHIDO
        </div>
      )}
      <div className="p-8 md:p-10">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{plano.nome}</h3>
          <p className="text-gray-600 mb-1">{plano.redacoes}</p>
        </div>
        <div className="mb-8 text-center">
          <p className="text-4xl font-bold text-secundaria mb-2">
            R$ {plano.preco}
            <span className="text-lg font-normal text-gray-600">{plano.periodo}</span>
          </p>
          <p className="text-gray-600 font-medium">{plano.prazo}</p>
          {/* Tooltip acessível sobre horas úteis */}
          <div className="mt-2 flex items-center justify-center">
            <span className="inline-flex items-center text-xs text-gray-500">
              <span
                className="group relative inline-flex items-center cursor-help focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 rounded-full"
                aria-describedby={`tooltip-horas-uteis-${plano.nome}`}
              >
                <span className="w-4 h-4 mr-1 flex items-center justify-center rounded-full border border-gray-400 text-[10px] font-semibold text-gray-600">
                  i
                </span>
                <span className="text-gray-600">Horas úteis*</span>
                <span
                  id={`tooltip-horas-uteis-${plano.nome}`}
                  role="tooltip"
                  className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden w-64 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-[10px] leading-relaxed text-white shadow-lg group-hover:block group-focus-within:block"
                >
                  {textoHorasUteis}
                </span>
              </span>
            </span>
          </div>
          {/* Texto sr-only para leitores de tela */}
          <p className="sr-only">{textoHorasUteis}</p>
        </div>
        <ul className="space-y-3 mb-8">
          {plano.recursos.map((texto, indice) => (
            <li key={indice} className="flex items-start">
              <svg
                className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 text-sm">{texto}</span>
            </li>
          ))}
        </ul>
        <div className="space-y-3">
          <Botao
            variante={plano.destaque ? 'primario' : 'neutro'}
            tamanho="lg"
            largura="cheio"
            isPlaceholder
            placeholderText="em breve"
            aria-label={`Assinar plano ${plano.nome}`}
            aria-describedby={`fluxo-ativacao-${plano.nome}`}
          >
            Assinar agora
          </Botao>
          <p
            id={`fluxo-ativacao-${plano.nome}`}
            className="text-sm text-gray-500 text-center"
          >
            {textoFluxoAtivacao}
          </p>
        </div>
      </div>
    </section>
  );
}