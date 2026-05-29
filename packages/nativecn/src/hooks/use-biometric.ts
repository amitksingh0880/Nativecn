import { useState, useEffect } from 'react';

/**
 * Stub biometric hook.
 * In a real app this would use `@sbaiahmed1/react-native-biometrics` or `expo-local-authentication`.
 */
export function useBiometric() {
  const [isSupported, setIsSupported] = useState(false);
  const [biometryType, setBiometryType] = useState<'FaceID' | 'TouchID' | 'Biometrics' | null>(null);

  useEffect(() => {
    // In actual implementation:
    // LocalAuthentication.hasHardwareAsync()
    // LocalAuthentication.supportedAuthenticationTypesAsync()
    setIsSupported(true);
    setBiometryType('FaceID');
  }, []);

  const authenticate = async (promptMessage: string = 'Authenticate to continue') => {
    // Simulate auth
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), 1000);
    });
  };

  return { isSupported, biometryType, authenticate };
}
