import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';
import Text from './Text';
import { fontWeight, colour, textSize } from '../stories';

export default {
  title: 'Components/Text',
  component: Text,
  decorators: [withKnobs],
};

export const Default = () => (
  <Text
    text={text(
      'Text',
      `In this world, everything can be happy. It is almost like something out of a fairytale book. Use absolutely no pressure. Just like an angel wing. Imagination is the key to painting. It is so important to do something every day that will make you happy. I will go over the colors one more time that we use: Titanium white, Thalo green, Prussian blue, Van Dyke brown, Alizarin crimson, Sap green, Cad yellow, and Permanent red.`
    )}
    textSize={textSize(1)}
    fontWeight={fontWeight(400)}
    colour={colour('darkBlue')}
  />
);
