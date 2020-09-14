import { withKnobs, text, number } from '@storybook/addon-knobs';
import React from 'react';
import Heading from './Heading';
import { fontWeight, colour, textSize } from '../stories';

export default {
  title: 'Components/Heading',
  component: Heading,
  decorators: [withKnobs],
};

export const Levels = () => (
  <Heading
    text={text('Text', 'Go out on a limb - that is where the fruit is')}
    level={number('Level', 1, { range: true, min: 1, max: 6, step: 1 }) as any}
    fontWeight={fontWeight(600)}
    colour={colour('darkBlue')}
  />
);

export const Sizes = () => (
  <Heading
    text={text('Text', 'We are only limited by our imagination')}
    textSize={textSize(4)}
    fontWeight={fontWeight(600)}
    colour={colour('darkBlue')}
  />
);
