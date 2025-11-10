import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

// Variantes do botão definidas via cva para reutilização
const estilosBotao = cva(
  'inline-flex items-center justify-center rounded-xl font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 gap-2 px-6 py-3',
  {
    variants: {
      variante: {
        primario:
          'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-blue-500 focus-visible:ring-offset-white',
        neutro:
          'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-blue-500',
        placeholder:
          'bg-gray-200 text-gray-600 cursor-not-allowed shadow-none focus-visible:ring-gray-400 focus-visible:ring-offset-white',
      },
      tamanho: {
        md: 'text-base',
        lg: 'text-lg py-4 px-8',
      },
      largura: {
        cheio: 'w-full',
        conteudo: '',
      },
      placeholder: {
        true: 'opacity-75',
        false: '',
      }
    },
    defaultVariants: {
      variante: 'primario',
      tamanho: 'md',
      largura: 'conteudo',
    },
  }
);

export interface BotaoProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof estilosBotao> {
  children: ReactNode;
  placeholderText?: string; // Texto adicional indicando status (ex: "em breve")
  isPlaceholder?: boolean; // Flag indicando se o botão é um placeholder
}

/**
 * Componente de botão reutilizável para o design system.
 * Recebe variantes de tamanho, cor e largura via propriedades.
 */
export default function Botao({
  variante,
  tamanho,
  largura,
  className,
  children,
  type = 'button',
  isPlaceholder = false,
  placeholderText,
  title,
  ...props
}: BotaoProps) {
  const resolvedVariant = isPlaceholder ? 'placeholder' : variante;
  const classes = [
    estilosBotao({
      variante: resolvedVariant,
      tamanho,
      largura,
      placeholder: isPlaceholder,
    }),
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const indicadorPlaceholder = isPlaceholder ? placeholderText ?? 'em breve' : null;

  return (
    <button
      type={type}
      className={classes}
      data-placeholder={isPlaceholder ? 'true' : undefined}
      aria-disabled={isPlaceholder || undefined}
      title={
        isPlaceholder && indicadorPlaceholder
          ? `Fluxo indisponível: ${indicadorPlaceholder}`
          : title
      }
      {...props}
    >
      <span className="flex flex-col items-center gap-1 leading-none">
        <span className="flex items-center gap-2">{children}</span>
        {indicadorPlaceholder ? (
          <span className="text-[11px] uppercase tracking-wide font-medium text-gray-600">
            {indicadorPlaceholder}
          </span>
        ) : null}
      </span>
    </button>
  );
}