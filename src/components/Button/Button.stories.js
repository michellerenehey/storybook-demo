import React from 'react'

import Button from './'

export default {
  component: Button,
  title: 'Button',
  args: {
    label: 'Click',
    isDisabled: false,
    size: 'medium',
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.arg = {
  variant: 'secondary',
}
