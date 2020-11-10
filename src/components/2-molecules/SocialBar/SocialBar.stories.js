import React from 'react';

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
};

/**
 * Default.
 */
export const Default = () => {
  return <SocialBar />;
};
