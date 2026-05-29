import React, { useState } from 'react';
import { View, Image, type ViewProps, type ImageProps } from 'react-native';
import { cva, type VariantProps } from '../../lib/variants';
import { Text } from '../typography';
import { cn } from '../../lib/utils';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full bg-muted justify-center items-center',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        default: 'h-10 w-10',
        lg: 'h-14 w-14',
        xl: 'h-20 w-20',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface AvatarProps extends ViewProps, VariantProps<typeof avatarVariants> {}

export const Avatar = React.forwardRef<React.ElementRef<typeof View>, AvatarProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={avatarVariants({ size, className })}
        {...props}
      />
    );
  }
);
Avatar.displayName = 'Avatar';

export interface AvatarImageProps extends Omit<ImageProps, 'source'> {
  src?: string;
  onLoadingStatusChange?: (status: 'loading' | 'loaded' | 'error') => void;
}

export const AvatarImage = React.forwardRef<React.ElementRef<typeof Image>, AvatarImageProps>(
  ({ className, src, onLoadingStatusChange, ...props }, ref) => {
    const [hasError, setHasError] = useState(false);

    if (hasError || !src) {
      return null;
    }

    return (
      <Image
        ref={ref}
        source={{ uri: src }}
        className={cn('aspect-square h-full w-full', className)}
        onError={() => {
          setHasError(true);
          onLoadingStatusChange?.('error');
        }}
        onLoad={() => {
          setHasError(false);
          onLoadingStatusChange?.('loaded');
        }}
        {...props}
      />
    );
  }
);
AvatarImage.displayName = 'AvatarImage';

export interface AvatarFallbackProps extends ViewProps {
  children?: React.ReactNode;
}

export const AvatarFallback = React.forwardRef<React.ElementRef<typeof View>, AvatarFallbackProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
        {...props}
      >
        {typeof children === 'string' ? (
          <Text className="font-medium text-muted-foreground">{children}</Text>
        ) : (
          children
        )}
      </View>
    );
  }
);
AvatarFallback.displayName = 'AvatarFallback';
