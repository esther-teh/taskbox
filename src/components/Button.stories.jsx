import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button', // Organize in "Components" category
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    primary: { control: 'boolean' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  primary: false,
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  size: 'small',
};
