import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import React from 'react';
import Toggle from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  decorators: [withKnobs],
};

export const Default = () => (
  <Toggle
    onLabel={text('On label', 'on')}
    offLabel={text('Off label', 'off')}
    checked={boolean('Checked', false)}
    label={text('Accessibility Label', 'Toggle the Switch')}
  />
);
