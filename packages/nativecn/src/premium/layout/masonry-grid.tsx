import React from 'react';
import { View, ScrollView, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';
import { FadeUp } from '../motion/fade-up';

export interface MasonryGridProps extends ViewProps {
  data: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  columns?: number;
}

export const MasonryGrid = React.forwardRef<React.ElementRef<typeof ScrollView>, MasonryGridProps>(
  ({ className, data, renderItem, columns = 2, ...props }, ref) => {
    
    // Distribute items into columns
    const columnsData = Array.from({ length: columns }, () => [] as any[]);
    data.forEach((item, i) => {
      const col = columnsData[i % columns];
      if (col) {
        col.push({ item, index: i });
      }
    });

    return (
      <ScrollView ref={ref as any} className={cn('flex-1', className)} {...props}>
        <View className="flex-row items-start px-2 py-4 gap-2">
          {columnsData.map((col, colIndex) => (
            <View key={colIndex} className="flex-1 flex-col gap-2">
              {col.map((wrapper) => (
                <FadeUp key={wrapper.index} delay={wrapper.index * 50}>
                  {renderItem(wrapper.item, wrapper.index)}
                </FadeUp>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
);
MasonryGrid.displayName = 'MasonryGrid';
