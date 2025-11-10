import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Junta classes CSS de forma segura, evitando duplicação de utilitários Tailwind.
 * @param entradas Entradas de classes para combinar
 */
export function juntarClasses(...entradas: ClassValue[]) {
  return twMerge(clsx(...entradas));
}