import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, primary, size }) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  const sizeClass = size === 'large' ? 'btn-large' : size === 'small' ? 'btn-small' : '';

  return (
    <button className={`btn ${mode} ${sizeClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  onClick: undefined,
  primary: false,
  size: 'medium',
};

export default Button;
