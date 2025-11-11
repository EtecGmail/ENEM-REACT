import { forwardRef, type AnchorHTMLAttributes, type MouseEvent } from 'react';

type MaskedButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  /**
   * Controla o estilo e a distribuição interna do botão mascarado.
   * - `inline`: para uso em navegações horizontais.
   * - `block`: para uso em listas verticais (menu mobile, por exemplo).
   */
  layout?: 'inline' | 'block';
  /** Texto principal exibido ao usuário. */
  label?: string;
  /** Texto secundário indicando o estado (ex.: "em breve"). */
  status?: string | null;
  /**
   * Define se o botão está desabilitado (mascarado). Quando verdadeiro,
   * impede a navegação e informa o estado por acessibilidade.
   */
  disabled?: boolean;
};

function composeClassNames(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}

const MaskedButton = forwardRef<HTMLAnchorElement, MaskedButtonProps>(
  (
    {
      layout = 'inline',
      label = 'Área do aluno',
      status = 'em breve',
      disabled = true,
      className,
      onClick,
      href = '#cta-final',
      tabIndex,
      ...anchorProps
    },
    ref,
  ) => {
    const isInline = layout === 'inline';

    const baseClasses = isInline
      ? 'inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded'
      : 'block font-medium text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded py-2';

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <a
        ref={ref}
        href={href}
        {...anchorProps}
        onClick={handleClick}
        aria-disabled={disabled}
        aria-label={disabled ? `${label} indisponível, ${status ?? ''}`.trim() : anchorProps['aria-label']}
        className={composeClassNames(baseClasses, className)}
        tabIndex={disabled ? tabIndex ?? 0 : tabIndex}
      >
        <span className="flex items-center gap-2">
          <span>{label}</span>
          {status ? (
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500" aria-hidden="true">
              {status}
            </span>
          ) : null}
        </span>
        <span className="sr-only" aria-live="polite">
          {disabled && status ? `${label} indisponível, ${status}.` : label}
        </span>
      </a>
    );
  },
);

MaskedButton.displayName = 'MaskedButton';

export default MaskedButton;
