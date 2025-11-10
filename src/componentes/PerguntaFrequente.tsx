import { juntarClasses } from '../utils/juntarClasses';

export interface PerguntaFrequenteProps {
  indice: number;
  pergunta: string;
  resposta: string;
  aberta: boolean;
  aoAlternar: () => void;
}

/**
 * Item de FAQ acessível com animação de expansão/colapso.
 */
export default function PerguntaFrequente({
  indice,
  pergunta,
  resposta,
  aberta,
  aoAlternar,
}: PerguntaFrequenteProps) {
  const idConteudo = `faq-conteudo-${indice}`;
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <button
        className="w-full text-left p-6 bg-white font-medium text-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
        onClick={aoAlternar}
        aria-expanded={aberta}
        aria-controls={idConteudo}
      >
        <span>{pergunta}</span>
        <svg
          className={juntarClasses(
            'w-5 h-5 text-gray-500 transform transition-transform',
            aberta && 'rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={idConteudo}
        className={juntarClasses(
          'px-6 pb-6 pt-0 text-gray-600 transition-all duration-300 ease-in-out',
          aberta ? 'block' : 'hidden'
        )}
      >
        {resposta}
      </div>
    </div>
  );
}