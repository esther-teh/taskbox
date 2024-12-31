import React from 'react';
import PropTypes from 'prop-types';
import './ToastNotification.css';

const ToastNotification = ({ message, type = 'info', onClose, duration = 60000 }) => {
  React.useEffect(() => {
    let timer;

    if (duration > 0) {
      // Set a timeout for duration
      timer = setTimeout(() => {
        onClose();
      }, duration);
    }

    return () => clearTimeout(timer); // Clear timeout when component unmounts
  }, [duration, onClose]);

  return (
    <div className={`toast-notification toast-notification-${type}`}>
      <span className="toast-notification-message">{message}</span>
      <button
        className="toast-notification-close"
        onClick={onClose}
        aria-label="Close Notification"
      >
        ×
      </button>
    </div>
  );
};

ToastNotification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number, // Duration in milliseconds
};

export default ToastNotification;
