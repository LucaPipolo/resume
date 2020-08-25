import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

render(
  <Icon
    className="test-icon-class"
    name="download"
    width="33"
    height="13"
    fill="ccc"
  />
);
const component = screen.getByTestId('icon');

describe('Rendering...', () => {
  test('The class is correctly appended.', async () => {
    expect(component).toHaveAttribute('class', 'test-icon-class');
  });

  test('The icon is correctly displayed.', async () => {
    expect(component.querySelector('path')).toHaveAttribute(
      'd',
      expect.stringMatching('.')
    );
  });

  test('The viewBox attribute is correctly added.', async () => {
    const { getByTestId, rerender } = render(
      <Icon name="github" viewBox="0 0 20 20" />
    );
    expect(getByTestId('icon')).toHaveAttribute('viewBox', '0 0 20 20');
    rerender(<Icon name="github" />);
    expect(getByTestId('icon')).toHaveAttribute('viewBox', '0 0 17 16');
  });

  test('Icon dimensions are correct.', async () => {
    expect(component).toHaveAttribute('width', '33');
    expect(component).toHaveAttribute('height', '13');
  });

  test('Icon fill color is correct.', async () => {
    expect(component.querySelector('path')).toHaveAttribute('fill', 'ccc');
  });
});
