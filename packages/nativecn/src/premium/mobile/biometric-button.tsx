import React, { useState } from 'react';
import { View, type ViewProps, ActivityIndicator } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { HapticPressable } from './haptic-pressable';
import { cn } from '../../lib/utils';
import { Text } from '../../components/typography';
import { Fingerprint, ScanFace } from 'lucide-react-native'; // Assuming these exist or substitute with standard icons

export interface BiometricButtonProps extends ViewProps {
  onSuccess: () => void;
  onError?: (error: Error) => void;
  promptMessage?: string;
  fallbackLabel?: string;
}

export const BiometricButton = React.forwardRef<React.ElementRef<typeof View>, BiometricButtonProps>(
  ({ className, onSuccess, onError, promptMessage = 'Authenticate to continue', fallbackLabel = 'Use Passcode', ...props }, ref) => {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [biometricType, setBiometricType] = useState<LocalAuthentication.AuthenticationType | null>(null);

    React.useEffect(() => {
      (async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        if (hasHardware && isEnrolled) {
          const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
          if (types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION)) {
            setBiometricType(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION);
          } else if (types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
            setBiometricType(LocalAuthentication.AuthenticationType.FINGERPRINT);
          }
        }
      })();
    }, []);

    const handleAuthenticate = async () => {
      try {
        setIsAuthenticating(true);
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage,
          fallbackLabel,
          disableDeviceFallback: false,
        });

        if (result.success) {
          onSuccess();
        } else {
          onError?.(new Error(result.error || 'Authentication failed'));
        }
      } catch (err: any) {
        onError?.(err);
      } finally {
        setIsAuthenticating(false);
      }
    };

    if (!biometricType) return null; // Don't render if biometrics aren't available

    return (
      <View ref={ref} className={cn('items-center justify-center', className)} {...props}>
        <HapticPressable
          onPress={handleAuthenticate}
          disabled={isAuthenticating}
          hapticStyle="medium"
          className="h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors active:bg-primary/20"
        >
          {isAuthenticating ? (
            <ActivityIndicator color="hsl(var(--primary))" />
          ) : biometricType === LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION ? (
            <ScanFace size={32} className="text-primary" />
          ) : (
            <Fingerprint size={32} className="text-primary" />
          )}
        </HapticPressable>
        <Text className="mt-2 text-xs font-medium text-muted-foreground">
          {biometricType === LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION ? 'Face ID' : 'Touch ID'}
        </Text>
      </View>
    );
  }
);
BiometricButton.displayName = 'BiometricButton';
