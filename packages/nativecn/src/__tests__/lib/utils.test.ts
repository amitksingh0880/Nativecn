import { cn } from '../../lib/utils';

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white');
    });

    it('should handle conditional classes', () => {
      expect(cn('bg-red-500', true && 'text-white', false && 'p-4')).toBe('bg-red-500 text-white');
    });

    it('should resolve tailwind conflicts using tailwind-merge', () => {
      // tailwind-merge resolves conflicts by keeping the last class
      expect(cn('bg-red-500 bg-blue-500')).toBe('bg-blue-500');
      expect(cn('p-2 p-4')).toBe('p-4');
    });

    it('should handle arrays of classes', () => {
      expect(cn(['bg-red-500', 'text-white'])).toBe('bg-red-500 text-white');
    });
  });
});
