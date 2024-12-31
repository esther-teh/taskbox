import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css'; // Add optional styling

const InputField = ({ value, placeholder, onChange, disabled, type }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className="input-field"
    />
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

InputField.defaultProps = {
  value: '',
  placeholder: 'Enter text',
  disabled: false,
  type: 'text',
};

export default InputField;
