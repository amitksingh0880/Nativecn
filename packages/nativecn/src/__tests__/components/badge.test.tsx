import React from 'react';
import { render } from '@testing-library/react-native';
import { Badge } from '../../components/badge/badge';

describe('Badge Component', () => {
  it('renders correctly with default variant', () => {
    const { getByText } = render(<Badge>Default Badge</Badge>);
    expect(getByText('Default Badge')).toBeTruthy();
  });

  it('renders correctly with outline variant', () => {
    const { getByText, getByTestId } = render(
      <Badge variant="outline" testID="badge-outline">
        Outline Badge
      </Badge>
    );
    expect(getByText('Outline Badge')).toBeTruthy();
    expect(getByTestId('badge-outline')).toBeTruthy();
  });

  it('renders correctly with destructive variant', () => {
    const { getByText } = render(<Badge variant="destructive">Destructive Badge</Badge>);
    expect(getByText('Destructive Badge')).toBeTruthy();
  });
});
