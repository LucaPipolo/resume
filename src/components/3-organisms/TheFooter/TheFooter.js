import React from 'react';
import PropTypes from 'prop-types';

/**
 * Import components.
 */
import SocialBar from '../../2-molecules/SocialBar/SocialBar';

/**
 * Import styles.
 */
import styles from './TheFooter.module.css';

/**
 * It prints the copyright and, optionally shows the Social
 * Network bar.
 */
function TheFooter({ title, copyright, showSocial }) {
  return (
    <footer className={styles.footer} data-testid="organisms/the_footer">
      <div className="container">
        <h2 className={styles.footerTitle}>{title}</h2>
        {showSocial ? <SocialBar /> : ''}
        <p className={styles.copyright}>{copyright}</p>
      </div>
    </footer>
  );
}

/**
 * Validates props type.
 */
TheFooter.propTypes = {
  /** The Footer title. */
  title: PropTypes.string.isRequired,
  /** The Footer copyright text. */
  copyright: PropTypes.string.isRequired,
  /** Shows the Social Network bar. */
  showSocial: PropTypes.bool,
};

/**
 * Sets default props values.
 */
TheFooter.defaultProps = {
  showSocial: true,
};

export default TheFooter;
