import { withKnobs, text, select } from '@storybook/addon-knobs';
import React from 'react';
import Card from './Card';

export default {
  title: `Components/Card`,
  component: Card,
  decorators: [withKnobs],
};

export const Default = () => (
  <Card
    margin={text('Margin', '')}
    padding={text('Padding', '5rem')}
    background={select('Background', ['white', 'yellow'], 'white')}
  />
);
