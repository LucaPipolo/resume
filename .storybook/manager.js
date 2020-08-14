import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  // Theme settings.
  theme: create({
    base: 'light',
    brandTitle: 'R E S U M E',
    brandUrl: 'https://lucapipolo/pattern-library',
  }),
});
