import React, { forwardRef } from 'react';
import { View, TextInput, type TextInputProps } from 'react-native';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';

export interface CurrencyInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  currencySymbol?: string;
}

export const CurrencyInput = forwardRef<React.ElementRef<typeof TextInput>, CurrencyInputProps>(
  ({ className, value, onChangeText, currencySymbol = '$', ...props }, ref) => {
    
    const handleChangeText = (text: string) => {
      // Basic formatting, remove non-numeric except decimal
      let cleanText = text.replace(/[^0-9.]/g, '');
      
      // Ensure only one decimal point
      const parts = cleanText.split('.');
      if (parts.length > 2) {
        cleanText = parts[0] + '.' + parts.slice(1).join('');
      }

      // Limit to 2 decimal places
      if (cleanText.includes('.')) {
        const [integer, decimal = ''] = cleanText.split('.');
        cleanText = `${integer}.${decimal.substring(0, 2)}`;
      }

      onChangeText(cleanText);
    };

    return (
      <View className={cn('relative flex h-10 w-full flex-row items-center rounded-md border border-input bg-background px-3', className)}>
        <Text className="text-muted-foreground font-medium mr-1">{currencySymbol}</Text>
        <TextInput
          ref={ref}
          value={value}
          onChangeText={handleChangeText}
          keyboardType="decimal-pad"
          className="flex-1 py-2 text-sm text-foreground focus:outline-none font-medium"
          placeholderTextColor="hsl(var(--muted-foreground))"
          {...props}
        />
      </View>
    );
  }
);
CurrencyInput.displayName = 'CurrencyInput';
