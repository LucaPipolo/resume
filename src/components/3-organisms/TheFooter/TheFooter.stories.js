import React from 'react';

import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

/**
 * Import component.
 */
import TheFooter from './TheFooter';

export default {
  component: TheFooter,
  title: 'Organisms/The Footer',
  parameters: {
    componentSubtitle: 'The website footer.',
  },
  decorators: [withKnobs, withA11y],
};

/**
 * Default.
 */
export const Default = () => {
  const theFooterTitle = text('Text', 'More about me');
  const theFooterCopyright = text(
    'Copyright',
    'Luca Pipolo © — All rights reserved.'
  );
  const theFooterShowSocial = boolean('Show Social Network bar?', true);
  return (
    <TheFooter
      title={theFooterTitle}
      copyright={theFooterCopyright}
      showSocial={theFooterShowSocial}
    />
  );
};
