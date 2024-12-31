import React from 'react';
import Loading from './Loading';

export default {
  title: 'Components/Loading',
  tags: ['autodocs'],
  component: Loading,
  argTypes: {
    size: { control: 'text', description: 'Size of the spinner (e.g., 40px, 2rem)' },
    color: { control: 'color', description: 'Color of the spinner' },
    thickness: { control: 'text', description: 'Thickness of the spinner border (e.g., 4px)' },
  },
};

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: '40px',
  color: '#007bff',
  thickness: '4px',
};

export const Large = Template.bind({});
Large.args = {
  size: '80px',
  color: '#ff4500',
  thickness: '8px',
};

export const Thin = Template.bind({});
Thin.args = {
  size: '50px',
  color: '#32cd32',
  thickness: '2px',
};
