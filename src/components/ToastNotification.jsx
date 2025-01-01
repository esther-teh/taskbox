import React from 'react';
import PropTypes from 'prop-types';
import './ToastNotification.css';

const ToastNotification = ({ message, type = 'info', onClose, duration = 60000 }) => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  useEffect(() => {
    let timer;

    if (showToast && duration > 0) {
      // Set a timeout for duration
      timer = setTimeout(() => {
        handleCloseToast();
      }, duration);
    }

    return () => clearTimeout(timer); // Clear timeout when component unmounts
  }, [showToast, duration]);

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
