import React from 'react';
import { render, screen } from '@testing-library/react';

import TheFooter from './TheFooter';

render(
  <TheFooter
    title="More about me"
    copyright="Luca Pipolo &copy; — All rights reserved."
  />
);
const component = screen.getByTestId('organisms/the_footer');
const title = screen.getByText(/more about me/i);
const copy = screen.getByText(/all rights reserved/i);

describe('Rendering...', () => {
  test('The title is correctly added.', async () => {
    expect(component).toContainElement(title);
  });

  test('The copyright is correctly added.', async () => {
    expect(component).toContainElement(copy);
  });

  test('The Social Network bar is not displayed if the related props is false.', async () => {
    const { getByTestId } = render(
      <TheFooter
        title="More about me"
        copyright="Luca Pipolo &copy; — All rights reserved."
        showSocial={false}
      />
    );
    expect(getByTestId('organisms/the_footer').innerHTML).not.toContain('<svg');
  });
});
