import React from 'react';

/**
 * Import components.
 */
import Main from '../components/4-layouts/Main/Main';
import TheFooter from '../components/3-organisms/TheFooter/TheFooter';

/**
 * The homepage (index) page.
 */
const IndexPage = () => (
  <Main>
    <TheFooter title="More about me" copyright="Luca Pipolo © — All rights reserved."/>
  </Main>
);

export default IndexPage;
