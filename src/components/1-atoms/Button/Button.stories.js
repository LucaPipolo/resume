import React from 'react';

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { iconsKnobsList as originalIconsKnobsList } from '../Icon/Icons.js';

/**
 * Import component.
 */
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
  parameters: {
    componentSubtitle: 'Basic button component.',
  },
  decorators: [withKnobs, withA11y],
};

/**
 * Default.
 */
export const Default = () => {
  const buttonType = select(
    'Type',
    {
      Primary: 'primary',
      Hollow: 'hollow',
      Link: 'link',
    },
    'primary'
  );
  const buttonText = text('Text', 'Send me an e-mail');
  const buttonUrl = text('URL', 'https://lucapipolo.com');
  const buttonUrlTarget = boolean('Open URL in a new tab?', false);
  const iconsKnobsList = {
    ...{ 'Select...': null },
    ...originalIconsKnobsList,
  };
  const buttonIcon = select('Icon', iconsKnobsList, 'envelop');

  return (
    <Button
      type={buttonType}
      text={buttonText}
      url={buttonUrl}
      target={buttonUrlTarget ? '_blank' : '_self'}
      icon={buttonIcon}
    />
  );
};
