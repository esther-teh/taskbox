import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  component: Avatar,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    borderColor: { control: 'color' },
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '/avatar.jpg',
  alt: 'John Doe',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  src: '/avatar.jpg',
  alt: 'Jane Doe',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  src: '/avatar.jpg',
  alt: 'Large Avatar',
  size: 'large',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  src: '/avatar.jpg',
  alt: 'Bordered Avatar',
  size: 'medium',
  borderColor: '#3498db',
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  alt: 'Placeholder Avatar',
  size: 'medium',
};
