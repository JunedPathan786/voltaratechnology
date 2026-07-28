import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const basePath = process.env.NODE_ENV === 'production' ? '/voltaratechnology' : '';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
