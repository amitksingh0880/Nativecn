import React, { forwardRef, useState } from 'react';
import { View, TextInput, type TextInputProps, Pressable } from 'react-native';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';
import { ChevronDown } from 'lucide-react-native';
import { useHaptics } from '../../hooks/use-haptics';

export interface PhoneInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  defaultCountryCode?: string;
  onCountryCodePress?: () => void;
}

export const PhoneInput = forwardRef<React.ElementRef<typeof TextInput>, PhoneInputProps>(
  ({ className, value, onChangeText, defaultCountryCode = '+1', onCountryCodePress, ...props }, ref) => {
    const triggerHaptic = useHaptics();

    // Basic formatter for US numbers (xxx) xxx-xxxx
    const formatPhoneNumber = (text: string): string => {
      const cleaned = ('' + text).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
      if (match) {
        return !match[2] ? (match[1] || '') : `(${match[1] || ''}) ${match[2] || ''}${match[3] ? `-${match[3]}` : ''}`;
      }
      return text;
    };

    const handleChangeText = (text: string) => {
      onChangeText(formatPhoneNumber(text));
    };

    return (
      <View className={cn('flex h-10 w-full flex-row items-center rounded-md border border-input bg-background overflow-hidden', className)}>
        <Pressable
          onPress={() => {
            triggerHaptic('selection');
            onCountryCodePress?.();
          }}
          className="flex-row items-center justify-center px-3 border-r border-input bg-muted/50 h-full active:bg-muted"
        >
          <Text className="text-sm font-medium mr-1">{defaultCountryCode}</Text>
          <ChevronDown size={14} className="text-muted-foreground" />
        </Pressable>
        <TextInput
          ref={ref}
          value={value}
          onChangeText={handleChangeText}
          keyboardType="phone-pad"
          className="flex-1 px-3 py-2 text-sm text-foreground focus:outline-none"
          placeholderTextColor="hsl(var(--muted-foreground))"
          {...props}
        />
      </View>
    );
  }
);
PhoneInput.displayName = 'PhoneInput';
