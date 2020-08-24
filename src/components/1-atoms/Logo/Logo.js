import React from 'react';
import PropTypes from 'prop-types';

/**
 * Import styles.
 */
import styles from './Logo.module.css';

/**
 * Displays the website logo.
 */
function Logo({ size }) {
  return (
    <div className={styles.logo} data-testid="logo">
      <span className={styles.logoBrand}>LP</span>
    </div>
  );
}

export default Logo;
