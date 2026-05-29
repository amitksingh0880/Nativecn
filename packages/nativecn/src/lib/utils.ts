import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes securely.
 * It uses clsx to construct the class string conditionally,
 * and tailwind-merge to deduplicate conflicting Tailwind utilities.
 * 
 * @example
 * cn('px-2 py-1', { 'bg-red-500': hasError }, ['text-sm', 'font-bold'])
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Compose multiple event handlers together.
 * Useful when forwarding refs and preserving user-passed event handlers.
 */
export function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);

    if (
      checkForDefaultPrevented === false ||
      !(event as any)?.defaultPrevented
    ) {
      return ourEventHandler?.(event);
    }
  };
}
