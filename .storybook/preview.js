import '../src/components/4-layouts/Main/styles/Main.css';
import typography from '../src/utils/typography';

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};

export const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
};

typography.injectStyles();
