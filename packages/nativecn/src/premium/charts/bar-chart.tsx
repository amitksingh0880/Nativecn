import React, { useEffect } from 'react';
import { View, type ViewProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withDelay } from 'react-native-reanimated';
import { Text } from '../../components/typography';
import { cn } from '../../lib/utils';

export interface BarChartProps extends ViewProps {
  data: { label: string; value: number }[];
  maxValue?: number;
  height?: number;
  barColor?: string;
}

export const BarChart = React.forwardRef<React.ElementRef<typeof View>, BarChartProps>(
  ({ className, data, maxValue, height = 200, barColor = 'hsl(var(--primary))', style, ...props }, ref) => {
    const max = maxValue || Math.max(...data.map((d) => d.value));

    return (
      <View
        ref={ref}
        className={cn('flex-row items-end justify-between px-4 pb-8 pt-4 border-b border-border', className)}
        style={[{ height }, style]}
        {...props}
      >
        {data.map((item, index) => (
          <Bar
            key={item.label}
            value={item.value}
            max={max}
            label={item.label}
            color={barColor}
            delay={index * 100}
            totalHeight={height - 40} // account for label and padding
          />
        ))}
      </View>
    );
  }
);
BarChart.displayName = 'BarChart';

const Bar = ({ value, max, label, color, delay, totalHeight }: any) => {
  const heightAnim = useSharedValue(0);

  const targetHeight = (value / max) * totalHeight;

  useEffect(() => {
    heightAnim.value = withDelay(delay, withSpring(targetHeight, { damping: 15 }));
  }, [targetHeight, delay]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: heightAnim.value,
  }));

  return (
    <View className="items-center flex-1">
      <View className="w-full flex-1 justify-end px-1">
        <Animated.View
          style={[animatedStyle, { backgroundColor: color }]}
          className="w-full rounded-t-sm"
        />
      </View>
      <Text className="mt-2 text-xs text-muted-foreground">{label}</Text>
    </View>
  );
};
