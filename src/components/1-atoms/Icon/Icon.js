import React from 'react';
import PropTypes from 'prop-types';

/**
 * Import SVG icons path and view boxes.
 */
import { viewBoxes, paths } from './Icons.js';

/**
 * The icon component display an SVG icon from a list of pre-defined icons
 * (see `Icons.js`). <br />
 * It's possible to adjust the icon width, height and fill from the props.
 * Additional classes can also be passed.
 */
const Icon = ({ name, className, viewBox, width, height, fill }) => {
  // JSX render.
  return (
    <svg
      className={className}
      viewBox={viewBox || viewBoxes(name)}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-testid="icon"
    >
      {paths(name, { fill })}
    </svg>
  );
};

/**
 * Validates props type.
 */
Icon.propTypes = {
  /** The name of the icon. Names are defined in `Icons.js`. */
  name: PropTypes.oneOf([
    'download',
    'envelop',
    'github',
    'linkedin',
    'medium',
    'skype',
    'twitter',
  ]).isRequired,
  /** The classes applied to the icon. */
  className: PropTypes.string,
  /** The SVG view box. */
  viewBox: PropTypes.string,
  /** The icon width. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The icon height. */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The color to fill the icon width. */
  fill: PropTypes.string,
};

/**
 * Sets default props values.
 */
Icon.defaultProps = {
  width: 'auto',
  height: '100%',
  fill: '#000',
};

export default Icon;
