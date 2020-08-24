import React from 'react';
import { render, screen } from '@testing-library/react';

import Logo from './Logo';

render(<Logo />);
const component = screen.getByTestId('logo');

describe('Rendering...', () => {
  test('The components correctly renders.', async () => {
    expect(component).toBeInTheDocument();
  });
});
