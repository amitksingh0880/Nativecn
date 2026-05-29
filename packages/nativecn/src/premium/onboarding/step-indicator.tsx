import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';
import { Check } from 'lucide-react-native';
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';

export interface StepIndicatorProps extends ViewProps {
  steps: string[];
  currentStep: number;
}

export const StepIndicator = React.forwardRef<React.ElementRef<typeof View>, StepIndicatorProps>(
  ({ className, steps, currentStep, ...props }, ref) => {
    return (
      <View ref={ref} className={cn('flex-row items-center justify-between w-full px-4', className)} {...props}>
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <React.Fragment key={step}>
              {/* Step Circle */}
              <View className="items-center">
                <Animated.View
                  entering={SlideInRight.delay(index * 100).springify()}
                  className={cn(
                    'h-8 w-8 rounded-full items-center justify-center border-2 transition-colors',
                    isCompleted ? 'bg-primary border-primary' : isActive ? 'border-primary bg-background' : 'border-muted bg-background'
                  )}
                >
                  {isCompleted ? (
                    <Animated.View entering={FadeIn}>
                      <Check size={16} className="text-primary-foreground" />
                    </Animated.View>
                  ) : (
                    <Text className={cn('text-xs font-bold', isActive ? 'text-primary' : 'text-muted-foreground')}>
                      {index + 1}
                    </Text>
                  )}
                </Animated.View>
                <Text className={cn('absolute -bottom-6 text-[10px] w-20 text-center', isActive || isCompleted ? 'text-foreground font-medium' : 'text-muted-foreground')}>
                  {step}
                </Text>
              </View>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <View className="flex-1 h-[2px] mx-2 bg-muted overflow-hidden">
                  <Animated.View
                    className="h-full bg-primary"
                    style={{
                      width: isCompleted ? '100%' : '0%',
                    }}
                  />
                </View>
              )}
            </React.Fragment>
          );
        })}
      </View>
    );
  }
);
StepIndicator.displayName = 'StepIndicator';
