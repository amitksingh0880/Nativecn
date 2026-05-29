import React from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';

export interface ChatBubbleProps extends ViewProps {
  message: string;
  isSender?: boolean;
  timestamp?: string;
  avatar?: React.ReactNode;
}

export const ChatBubble = React.forwardRef<React.ElementRef<typeof View>, ChatBubbleProps>(
  ({ className, message, isSender = false, timestamp, avatar, ...props }, ref) => {
    
    const enteringAnimation = isSender ? FadeInDown.springify() : FadeInUp.springify();

    return (
      <Animated.View
        entering={enteringAnimation}
        ref={ref as any}
        className={cn('mb-4 flex w-full flex-row', isSender ? 'justify-end' : 'justify-start', className)}
        {...props}
      >
        {!isSender && avatar && (
          <View className="mr-2 justify-end pb-4">{avatar}</View>
        )}
        
        <View className="max-w-[80%]">
          <View
            className={cn(
              'rounded-2xl px-4 py-3 shadow-sm',
              isSender 
                ? 'rounded-tr-sm bg-primary border border-primary' 
                : 'rounded-tl-sm bg-muted border border-border'
            )}
          >
            <Text className={cn('text-[15px] leading-5', isSender ? 'text-primary-foreground' : 'text-foreground')}>
              {message}
            </Text>
          </View>
          
          {timestamp && (
            <Text className={cn('mt-1 text-xs text-muted-foreground', isSender ? 'text-right' : 'text-left')}>
              {timestamp}
            </Text>
          )}
        </View>

        {isSender && avatar && (
          <View className="ml-2 justify-end pb-4">{avatar}</View>
        )}
      </Animated.View>
    );
  }
);
ChatBubble.displayName = 'ChatBubble';
