import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

render(
  <Button
    url="http://lucapipolo.com"
    text="Send me an e-mail"
    icon="download"
  />
);
const component = screen.getByText(/send me an e-mail/i);

describe('Rendering...', () => {
  test('The class is correctly appended.', async () => {
    const { getByText, rerender } = render(
      <Button
        text="Download my CV"
        url="http://lucapipolo.com"
        target="_blank"
      />
    );
    expect(getByText(/download my cv/i)).toHaveAttribute(
      'class',
      'button buttonPrimary'
    );
    rerender(
      <Button
        type="hollow"
        text="Download my CV"
        url="http://lucapipolo.com"
        target="_self"
      />
    );
    expect(getByText(/download my cv/i)).toHaveAttribute(
      'class',
      'button buttonHollow'
    );
    rerender(
      <Button
        type="link"
        text="Download my CV"
        url="http://lucapipolo.com"
        target="_self"
      />
    );
    expect(getByText(/download my cv/i)).toHaveAttribute(
      'class',
      'button buttonLink'
    );
    rerender(
      <Button
        extraClasses="testClass"
        text="Download my CV"
        url="http://lucapipolo.com"
        target="_self"
      />
    );
    expect(getByText(/download my cv/i)).toHaveAttribute(
      'class',
      'button buttonPrimary testClass'
    );
  });

  test('The button is correctly linked.', async () => {
    expect(component).toHaveAttribute('href', 'http://lucapipolo.com');
  });

  test('The button does not links to cross-origin destinations.', async () => {
    const { getByText, rerender } = render(
      <Button
        text="Send me an e-mail"
        url="http://lucapipolo.com"
        target="_blank"
      />
    );
    expect(getByText(/send me an e-mail/i)).toHaveAttribute('target', '_blank');
    expect(getByText(/send me an e-mail/i)).toHaveAttribute(
      'rel',
      'noreferrer'
    );
    rerender(
      <Button
        text="Send me an e-mail"
        url="http://lucapipolo.com"
        target="_self"
      />
    );
    expect(getByText(/send me an e-mail/i)).not.toHaveAttribute(
      'rel',
      'noreferrer'
    );
  });

  test('The icon is correctly displayed.', async () => {
    expect(component.innerHTML).toContain('<svg');
  });
});
