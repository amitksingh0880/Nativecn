import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Input } from '../../components/input/input';

describe('Input Component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Enter email" />
    );
    expect(getByPlaceholderText('Enter email')).toBeTruthy();
  });

  it('handles text changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Type here" onChangeText={onChangeTextMock} />
    );

    const input = getByPlaceholderText('Type here');
    fireEvent.changeText(input, 'Hello Nativecn');
    
    expect(onChangeTextMock).toHaveBeenCalledWith('Hello Nativecn');
  });

  it('passes generic props correctly', () => {
    const { getByDisplayValue } = render(
      <Input value="test value" secureTextEntry={true} />
    );
    
    const input = getByDisplayValue('test value');
    expect(input.props.secureTextEntry).toBe(true);
  });
});
