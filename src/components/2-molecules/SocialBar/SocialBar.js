import React from 'react';

/**
 * Import components.
 */
import Button from '../../1-atoms/Button/Button';

/**
 * Import styles.
 */
import styles from './SocialBar.module.css';

/**
 * This is just a container component to hold all the Social Network buttons.
 * <br/> It passes to the
 * [button](http://localhost:6006/?path=/docs/atoms-button--default) components
 * the Social Network icon, link and text.
 */
function SocialBar() {
  // JSX render.
  return (
    <div className={styles.socialBar}>
      <Button
        extraClasses={styles.socialBar__Element}
        type="link"
        text="GitHub"
        url="https://github.com/LucaPipolo"
        target="_blank"
        icon="github"
      />
       <Button
        extraClasses={styles.socialBar__Element}
        type="link"
        text="LinkedIn"
        url="https://www.linkedin.com/in/lucapipolo/"
        target="_blank"
        icon="linkedin"
      />
      <Button
        extraClasses={styles.socialBar__Element}
        type="link"
        text="Twitter"
        url="https://twitter.com/luca_pipolo"
        target="_blank"
        icon="twitter"
      />
      <Button
        extraClasses={styles.socialBar__Element}
        type="link"
        text="Skype"
        url="skype:pipolo.luca?chat"
        target="_blank"
        icon="skype"
      />
      <Button
        extraClasses={styles.socialBar__Element}
        type="link"
        text="Medium"
        url="https://medium.com/@pipolo.luca"
        target="_blank"
        icon="medium"
      />
    </div>
  );
}

export default SocialBar;
