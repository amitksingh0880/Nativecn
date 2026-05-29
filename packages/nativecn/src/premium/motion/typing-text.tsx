import React, { useEffect, useState } from 'react';
import { View, type ViewProps } from 'react-native';
import { Text } from '../../components/typography';
import { cn } from '../../lib/utils';

export interface TypingTextProps extends ViewProps {
  text: string;
  typingSpeed?: number;
  cursor?: string;
  cursorBlinkSpeed?: number;
}

export const TypingText = React.forwardRef<React.ElementRef<typeof View>, TypingTextProps>(
  ({ className, text, typingSpeed = 50, cursor = '|', cursorBlinkSpeed = 500, style, ...props }, ref) => {
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
      let i = 0;
      setIsTyping(true);
      setDisplayedText('');

      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }, [text, typingSpeed]);

    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, cursorBlinkSpeed);

      return () => clearInterval(cursorInterval);
    }, [cursorBlinkSpeed]);

    return (
      <View ref={ref} className={cn('flex-row items-center', className)} style={style} {...props}>
        <Text className="text-foreground">{displayedText}</Text>
        <Text className={cn('text-foreground opacity-100', !showCursor && 'opacity-0')}>
          {cursor}
        </Text>
      </View>
    );
  }
);
TypingText.displayName = 'TypingText';
