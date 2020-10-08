import React from 'react';

import { withA11y } from '@storybook/addon-a11y';

/**
 * Import component.
 */
import SocialBar from './SocialBar';

export default {
  component: SocialBar,
  title: 'Molecules/Social Bar',
  parameters: {
    componentSubtitle: 'A container for all Social Network button components.',
  },
  decorators: [withA11y],
};

/**
 * Default.
 */
export const Default = () => {
  return (
    <SocialBar />
  );
};
