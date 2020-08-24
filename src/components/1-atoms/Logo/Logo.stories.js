import React from 'react';

/**
 * Import component.
 */
import Logo from './Logo';

export default {
  component: Logo,
  title: 'Atoms/Logo',
  parameters: {
    componentSubtitle: 'The website logo.',
  },
};

/**
 * Default.
 */
export const Default = () => {
  return <Logo />;
};
