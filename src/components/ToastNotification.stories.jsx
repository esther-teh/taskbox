import React, { useState } from 'react';
import ToastNotification from './ToastNotification';

export default {
  title: 'Components/ToastNotification',
  component: ToastNotification,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false); // Close the notification after duration
  };

  return (
    <>
      {isVisible && <ToastNotification {...args} onClose={handleClose} />}
    </>
  );
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation was successful!',
  type: 'success',
  duration: 60000, // 1 minute
};

export const Error = Template.bind({});
Error.args = {
  message: 'Something went wrong!',
  type: 'error',
  duration: 60000, // 1 minute
};

export const Info = Template.bind({});
Info.args = {
  message: 'Here is some information.',
  type: 'info',
  duration: 60000, // 1 minute
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning!',
  type: 'warning',
  duration: 60000, // 1 minute
};
