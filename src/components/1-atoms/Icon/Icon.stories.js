import React from 'react';

import { withKnobs, select, number, color } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { iconsKnobsList } from './Icons.js';

/**
 * Import component.
 */
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Atoms/Icon',
  parameters: {
    componentSubtitle: 'Basic SVG icon component.',
  },
  decorators: [withKnobs, withA11y],
};

/**
 * Default.
 */
export const Default = () => {
  // Knobs controls.
  const iconName = select('Name', iconsKnobsList, 'github');
  const iconWidth = number('Width', 30, {
    range: true,
    min: 20,
    max: 120,
    step: 10,
  });
  const iconFill = color('Fill');

  return <Icon name={iconName} width={iconWidth} fill={iconFill} />;
};
