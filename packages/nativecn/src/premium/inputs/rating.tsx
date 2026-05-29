import React from 'react';
import { View, Pressable, type ViewProps } from 'react-native';
import { Star } from 'lucide-react-native';
import { cn } from '../../lib/utils';
import { useHaptics } from '../../hooks/use-haptics';

export interface RatingProps extends ViewProps {
  maxRating?: number;
  rating: number;
  onRatingChange: (rating: number) => void;
  size?: number;
  readonly?: boolean;
}

export const Rating = React.forwardRef<React.ElementRef<typeof View>, RatingProps>(
  ({ className, maxRating = 5, rating, onRatingChange, size = 24, readonly = false, ...props }, ref) => {
    const triggerHaptic = useHaptics();

    return (
      <View ref={ref} className={cn('flex-row items-center space-x-1', className)} {...props}>
        {Array.from({ length: maxRating }).map((_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= rating;

          return (
            <Pressable
              key={index}
              disabled={readonly}
              onPress={() => {
                if (!readonly) {
                  triggerHaptic('light');
                  onRatingChange(starValue);
                }
              }}
              className="p-1"
            >
              <Star
                size={size}
                className={cn(
                  'transition-colors',
                  isFilled ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground'
                )}
              />
            </Pressable>
          );
        })}
      </View>
    );
  }
);
Rating.displayName = 'Rating';
