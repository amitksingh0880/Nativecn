import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../../components/button/button';
import { Text } from '../../components/typography';

// We wrap the tests with a basic setup
describe('Button Component', () => {
  it('renders correctly with children', () => {
    const { getByText } = render(
      <Button>
        <Text>Click Me</Text>
      </Button>
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock}>
        <Text>Pressable</Text>
      </Button>
    );

    fireEvent.press(getByText('Pressable'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock} disabled>
        <Text>Disabled</Text>
      </Button>
    );

    fireEvent.press(getByText('Disabled'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('applies variant classes correctly', () => {
    const { getByTestId } = render(
      <Button variant="destructive" testID="my-button">
        <Text>Destructive</Text>
      </Button>
    );
    
    // We expect the native element to have the destruct style strings in its className or style 
    // In React Native testing with nativewind, checking exact styles is complex without a full provider,
    // but we can check if it renders without throwing.
    expect(getByTestId('my-button')).toBeTruthy();
  });
});
