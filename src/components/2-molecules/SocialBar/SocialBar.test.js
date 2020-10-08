import React from 'react';
import { render, screen } from '@testing-library/react';

import SocialBar from './SocialBar';

render(<SocialBar />);
const component = screen.getByText(/github/i);

describe('Rendering...', () => {
  test('The components correctly renders.', async () => {
    expect(component).toBeInTheDocument();
  });
});
