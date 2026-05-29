import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NativecnProvider } from '../context/provider';
import { Button } from '../components/button/button';
import { Text } from '../components/typography';
import { ToastProvider, useToastContext } from '../context/toast-context';

const TestComponent = () => {
  const { toast } = useToastContext();
  
  return (
    <Button onPress={() => toast({ title: 'Success', description: 'Integration works' })}>
      <Text>Trigger Toast</Text>
    </Button>
  );
};

describe('Integration Tests', () => {
  it('should render components within the global provider and trigger context actions', () => {
    // In React Native Testing Library, rendering the provider tree evaluates integration
    const { getByText } = render(
      <NativecnProvider>
        <TestComponent />
      </NativecnProvider>
    );

    const btn = getByText('Trigger Toast');
    expect(btn).toBeTruthy();

    // Fire the button, which triggers the toast context. 
    // The visual toast won't appear instantaneously in the same tick without advanceTimers, 
    // but the context function will be executed without throwing.
    fireEvent.press(btn);
  });
});
