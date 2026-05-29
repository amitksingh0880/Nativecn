import { useState, useCallback } from 'react';

/**
 * Manage open/close state (e.g. for dialogs, sheets, modals).
 */
export function useDisclosure(defaultIsOpen: boolean = false) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle, setIsOpen };
}
