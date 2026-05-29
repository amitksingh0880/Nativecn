import { Text as RNText } from 'react-native';
import { cva, type VariantProps } from '../../lib/variants';
import { createComponent } from '../../lib/create-component';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      default: 'text-base font-normal',
      h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
      p: 'text-base leading-7',
      blockquote: 'mt-6 border-l-2 pl-6 italic text-muted-foreground',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'default',
    align: 'left',
  },
});

export type TextProps = React.ComponentPropsWithoutRef<typeof RNText> &
  VariantProps<typeof typographyVariants> & {
    className?: string;
  };

/**
 * Standardized typography component based on shadcn/ui text styles.
 */
export const Text = createComponent<RNText, TextProps>({
  Component: RNText,
  variants: typographyVariants,
});

// Semantic exports for easier usage
export const H1 = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'h1' }) });
export const H2 = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'h2' }) });
export const H3 = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'h3' }) });
export const H4 = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'h4' }) });
export const P = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'p' }) });
export const BlockQuote = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'blockquote' }) });
export const Code = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'code' }) });
export const Lead = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'lead' }) });
export const Large = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'large' }) });
export const Small = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'small' }) });
export const Muted = createComponent<RNText, TextProps>({ Component: RNText, variants: () => typographyVariants({ variant: 'muted' }) });
