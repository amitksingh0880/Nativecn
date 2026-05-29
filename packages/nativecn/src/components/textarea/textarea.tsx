import React, { useState } from 'react';
import { TextInput, View, type TextInputProps, type NativeSyntheticEvent, type TextInputContentSizeChangeEventData } from 'react-native';
import { cva, type VariantProps } from '../../lib/variants';
import { useThemeContext } from '../../context/theme-context';
import { cn } from '../../lib/utils';
import { Text } from '../typography';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: '',
        glass: 'bg-glass border-glass-border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextareaProps extends TextInputProps, VariantProps<typeof textareaVariants> {
  error?: string;
  helperText?: string;
  autoGrow?: boolean;
  maxHeight?: number;
  showCharacterCount?: boolean;
  maxLength?: number;
}

export const Textarea = React.forwardRef<React.ElementRef<typeof TextInput>, TextareaProps>(
  ({ className, variant, error, helperText, autoGrow = true, maxHeight = 200, showCharacterCount, maxLength, value, onChangeText, style, ...props }, ref) => {
    const { theme } = useThemeContext();
    const [height, setHeight] = useState(80);

    const handleContentSizeChange = (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
      if (autoGrow) {
        setHeight(Math.min(Math.max(80, e.nativeEvent.contentSize.height), maxHeight));
      }
      props.onContentSizeChange?.(e);
    };

    const count = value?.length || 0;

    return (
      <View className="flex flex-col space-y-1.5 w-full">
        <TextInput
          ref={ref}
          className={cn(
            textareaVariants({ variant }),
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          style={[style, autoGrow && { height }]}
          placeholderTextColor={theme.muted.foreground as string}
          multiline
          textAlignVertical="top"
          onContentSizeChange={handleContentSizeChange}
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          {...props}
        />
        
        <View className="flex flex-row justify-between w-full">
          {(helperText || error) ? (
            <Text className={cn('text-sm flex-1', error ? 'text-destructive' : 'text-muted-foreground')}>
              {error || helperText}
            </Text>
          ) : <View />}

          {showCharacterCount && maxLength && (
            <Text className="text-sm text-muted-foreground text-right pl-2">
              {count}/{maxLength}
            </Text>
          )}
        </View>
      </View>
    );
  }
);
Textarea.displayName = 'Textarea';
