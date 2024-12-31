import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css'; // Add spinner styling

const Loading = ({ size, color, thickness }) => {
  return (
    <div
      className="loading-spinner"
      style={{
        width: size,
        height: size,
        borderWidth: thickness,
        borderColor: `${color} transparent transparent transparent`,
      }}
    />
  );
};

Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.string,
};

Loading.defaultProps = {
  size: '40px',
  color: '#007bff',
  thickness: '4px',
};

export default Loading;
