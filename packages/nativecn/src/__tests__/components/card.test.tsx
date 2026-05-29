import React from 'react';
import { render } from '@testing-library/react-native';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/card/card';
import { Text } from '../../components/typography';

describe('Card Component', () => {
  it('renders all card subcomponents correctly', () => {
    const { getByText } = render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Card Content</Text>
        </CardContent>
        <CardFooter>
          <Text>Card Footer</Text>
        </CardFooter>
      </Card>
    );

    expect(getByText('Card Title')).toBeTruthy();
    expect(getByText('Card Description')).toBeTruthy();
    expect(getByText('Card Content')).toBeTruthy();
    expect(getByText('Card Footer')).toBeTruthy();
  });
});
