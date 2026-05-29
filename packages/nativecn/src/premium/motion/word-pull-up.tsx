import React from 'react';
import { View, type ViewProps } from 'react-native';
import { Text } from '../../components/typography';
import { FadeUp } from './fade-up';
import { cn } from '../../lib/utils';

export interface WordPullUpProps extends ViewProps {
  text: string;
  delay?: number;
  wordDelay?: number;
}

export const WordPullUp = React.forwardRef<React.ElementRef<typeof View>, WordPullUpProps>(
  ({ className, text, delay = 0, wordDelay = 100, style, ...props }, ref) => {
    const words = text.split(' ');

    return (
      <View ref={ref} className={cn('flex-row flex-wrap', className)} style={style} {...props}>
        {words.map((word, i) => (
          <FadeUp
            key={i}
            delay={delay + i * wordDelay}
            duration={500}
            distance={20}
            className="mr-1 mb-1"
          >
            <Text className="text-foreground font-medium text-lg">{word}</Text>
          </FadeUp>
        ))}
      </View>
    );
  }
);
WordPullUp.displayName = 'WordPullUp';
