import React from 'react';
import PropTypes from 'prop-types';

/**
 * Import styles.
 */
import './styles/Main.css';

/**
 * The main layout.
 */
const Main = ({ children }) => {
  return <>{children}</>;
};

/**
 * Validates props type.
 */
Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
