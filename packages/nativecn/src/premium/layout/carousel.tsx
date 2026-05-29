import React, { useRef, useState } from 'react';
import { View, ScrollView, Dimensions, type ViewProps, type NativeSyntheticEvent, type NativeScrollEvent } from 'react-native';
import { cn } from '../../lib/utils';

export interface CarouselProps extends ViewProps {
  data: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  itemWidth?: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const Carousel = React.forwardRef<React.ElementRef<typeof View>, CarouselProps>(
  ({ className, data, renderItem, itemWidth = SCREEN_WIDTH * 0.8, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(offsetX / itemWidth);
      setActiveIndex(index);
    };

    return (
      <View ref={ref} className={cn('w-full', className)} {...props}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={itemWidth}
          decelerationRate="fast"
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingHorizontal: (SCREEN_WIDTH - itemWidth) / 2 }}
        >
          {data.map((item, index) => (
            <View key={index} style={{ width: itemWidth }} className="px-2">
              {renderItem(item, index)}
            </View>
          ))}
        </ScrollView>
        
        {/* Pagination Dots */}
        <View className="flex-row justify-center mt-4 space-x-2">
          {data.map((_, i) => (
            <View
              key={i}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30'
              )}
            />
          ))}
        </View>
      </View>
    );
  }
);
Carousel.displayName = 'Carousel';
