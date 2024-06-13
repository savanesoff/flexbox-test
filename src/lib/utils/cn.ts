/**
 * Tailwind classes merge utility
 * Usage:
 * className={cn('text-red-500', 'bg-blue-500', 'p-4', 'rounded-lg', ...classNames, condition && 'text-lg')}
 */
import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}
