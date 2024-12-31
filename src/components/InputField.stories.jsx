import React, { useState } from 'react';
import InputField from './InputField';

export default {
  title: 'Components/InputField',
  tags: ['autodocs'],
  component: InputField,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: { control: { type: 'select', options: ['text', 'password', 'email', 'number'] } },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <InputField {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text',
  disabled: false,
  type: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Cannot edit',
  disabled: true,
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  value: 'Initial Value',
  placeholder: 'Enter text',
};
