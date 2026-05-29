import React from 'react';
import { render } from '@testing-library/react-native';
import { Button } from '../../components/button/button';
import { Text } from '../../components/typography';
import { Switch } from '../../components/switch/switch';
import { Checkbox } from '../../components/checkbox/checkbox';

describe('Accessibility Standards', () => {
  it('Button should be accessible as a button role', () => {
    const { getByRole } = render(
      <Button accessibilityRole="button">
        <Text>Accessible Button</Text>
      </Button>
    );
    expect(getByRole('button')).toBeTruthy();
  });

  it('Switch should reflect checked accessibility state', () => {
    const { getByRole } = render(
      <Switch checked={true} accessibilityRole="switch" accessibilityState={{ checked: true }} />
    );
    const switchElement = getByRole('switch');
    expect(switchElement.props.accessibilityState.checked).toBe(true);
  });

  it('Checkbox should reflect checked accessibility state', () => {
    const { getByRole } = render(
      <Checkbox checked={true} accessibilityRole="checkbox" accessibilityState={{ checked: true }} />
    );
    const checkboxElement = getByRole('checkbox');
    expect(checkboxElement.props.accessibilityState.checked).toBe(true);
  });
});
