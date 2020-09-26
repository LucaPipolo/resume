import React from 'react';
import PropTypes from 'prop-types';

/**
 * Import components.
 */
import Icon from '../Icon/Icon';

/**
 * Import styles.
 */
import styles from './Button.module.css';

/**
 * The button component creates an `<a>` item that looks like a button. <br />
 * It can be of three different types: `primary` (default), `hollow` and `link`.
 * An icon can be optionally displayed next to the button text.
 */
function Button({ type, extraClasses, text, url, target, icon }) {
  // Prepares classes.
  let classes = `${styles.button}`;
  let iconFill = '#000';
  switch (type) {
    case 'primary':
    default:
      classes += ` ${styles.buttonPrimary}`;
      iconFill = '#fff';
      break;
    case 'hollow':
      classes += ` ${styles.buttonHollow}`;
      break;
    case 'link':
      classes += ` ${styles.buttonLink}`;
      break;
  }
  if (extraClasses) {
    classes += ` ${extraClasses}`;
  }

  // Prepares content.
  let rel;
  if (target === '_blank') {
    rel = 'noreferrer';
  }

  // Prepares icon.
  if (icon) {
    icon = (
      <Icon
        key="icon"
        className={styles.buttonIcon}
        name={icon}
        width="25"
        height="15"
        fill={iconFill}
      />
    );
  }

  // Prepares content.
  let content = [text, icon];
  if (type === 'link') {
    content = [icon, text, ' \u{02192}'];
  }

  // JSX render.
  return (
    <a className={classes} href={url} target={target} rel={rel} role="button">
      {content}
    </a>
  );
}

/**
 * Validates props type.
 */
Button.propTypes = {
  /** The type of button. */
  type: PropTypes.oneOf(['primary', 'hollow', 'link']),
  /** Optionally extra classes */
  extraClasses: PropTypes.string,
  /** The button text. */
  text: PropTypes.string.isRequired,
  /** The URL that the hyperlink points to. */
  url: PropTypes.string.isRequired,
  /** The link target. */
  target: PropTypes.oneOf(['_self', '_blank']).isRequired,
  /** The optional icon to show in the button. */
  icon: PropTypes.oneOf([
    'download',
    'envelop',
    'github',
    'linkedin',
    'medium',
    'skype',
    'twitter',
  ]),
};

/**
 * Sets default props values.
 */
Button.defaultProps = {
  type: 'primary',
  target: '_self',
};

export default Button;
