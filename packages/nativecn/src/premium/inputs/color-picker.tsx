import React, { useState } from 'react';
import { View, Pressable, Modal, StyleSheet, Dimensions, type ViewProps } from 'react-native';
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';
import { useHaptics } from '../../hooks/use-haptics';
import { BlurView } from 'expo-blur';

export interface ColorPickerProps extends ViewProps {
  colors?: string[];
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const DEFAULT_COLORS = [
  '#ef4444', // red
  '#f97316', // orange
  '#eab308', // yellow
  '#22c55e', // green
  '#06b6d4', // cyan
  '#3b82f6', // blue
  '#a855f7', // purple
  '#ec4899', // pink
  '#000000', // black
  '#ffffff', // white
];

export const ColorPicker = React.forwardRef<React.ElementRef<typeof View>, ColorPickerProps>(
  ({ className, colors = DEFAULT_COLORS, selectedColor, onColorChange, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const triggerHaptic = useHaptics();

    return (
      <>
        <Pressable
          ref={ref as any}
          onPress={() => setOpen(true)}
          className={cn('flex h-10 w-full flex-row items-center justify-between rounded-md border border-input bg-background px-3 py-2', className)}
          {...props}
        >
          <Text className="text-sm">Choose Color</Text>
          <View
            className="h-6 w-6 rounded-full border border-border"
            style={{ backgroundColor: selectedColor }}
          />
        </Pressable>

        <Modal visible={open} transparent animationType="none" onRequestClose={() => setOpen(false)}>
          <View className="flex-1 justify-end">
            <Pressable className="absolute inset-0 bg-black/40" onPress={() => setOpen(false)} />
            
            <Animated.View
              entering={SlideInDown.springify().damping(20)}
              exiting={SlideOutDown}
              className="bg-background rounded-t-3xl border-t border-border overflow-hidden"
            >
              <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
              <View className="p-6 pb-safe items-center">
                <View className="w-12 h-1.5 bg-muted rounded-full mb-6" />
                <Text className="text-lg font-semibold mb-4">Select a Color</Text>
                
                <View className="flex-row flex-wrap justify-center gap-4">
                  {colors.map((c) => (
                    <Pressable
                      key={c}
                      onPress={() => {
                        triggerHaptic('selection');
                        onColorChange(c);
                        setOpen(false);
                      }}
                      className={cn(
                        'h-12 w-12 rounded-full border shadow-sm items-center justify-center',
                        c === '#ffffff' ? 'border-border' : 'border-transparent',
                        selectedColor === c && 'ring-2 ring-primary ring-offset-2'
                      )}
                      style={{ backgroundColor: c }}
                    >
                      {selectedColor === c && (
                        <View className={cn('h-4 w-4 rounded-full', c === '#ffffff' ? 'bg-black' : 'bg-white')} />
                      )}
                    </Pressable>
                  ))}
                </View>
              </View>
            </Animated.View>
          </View>
        </Modal>
      </>
    );
  }
);
ColorPicker.displayName = 'ColorPicker';
