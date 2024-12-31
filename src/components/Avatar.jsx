import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';  // Import the CSS for styling

const Avatar = ({ src, alt, size, borderColor }) => {
  const styles = {
    width: size,
    height: size,
    borderColor: borderColor || 'transparent',
  };

  return (
    <div className="avatar" style={styles}>
      {src ? (
        <img src={src} alt={alt} className="avatar-img" />
      ) : (
        <div className="avatar-placeholder">{alt ? alt.charAt(0) : '?'}</div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderColor: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'medium',
  borderColor: 'transparent',
};

export default Avatar;
