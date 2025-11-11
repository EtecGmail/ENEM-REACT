import type { ButtonHTMLAttributes, MouseEvent } from 'react';
import { forwardRef } from 'react';

type NativeButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

export interface MaskedButtonProps extends NativeButtonProps {
  label?: string;
  statusLabel?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function mergeClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const MaskedButton = forwardRef<HTMLButtonElement, MaskedButtonProps>(
  (
    {
      label = 'Área do aluno',
      statusLabel = 'Em breve',
      className,
      onClick,
      href,
      ...rest
    },
    ref,
  ) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    };

    const ariaLabel = (rest as { 'aria-label'?: string })['aria-label'];

    return (
      <button
        type="button"
        ref={ref}
        {...rest}
        onClick={handleClick}
        data-target-href={href}
        aria-disabled="true"
        aria-label={ariaLabel ?? `${label}, ${statusLabel}`}
        className={mergeClasses(
          'group relative inline-flex w-auto items-center gap-3 rounded-full border border-blue-100 bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-75',
          'hover:from-blue-500 hover:to-blue-400',
          className,
        )}
      >
        <span className="text-base leading-tight">{label}</span>
        <span
          aria-hidden="true"
          className="rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-white transition group-hover:bg-white/20"
        >
          {statusLabel}
        </span>
        <span className="sr-only">{`Status: ${statusLabel}`}</span>
      </button>
    );
  },
);

MaskedButton.displayName = 'MaskedButton';
