import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';
import TextField from './TextField';
import Block from './Block';
import { fontWeight, colour, textSize } from '../stories';

export default {
  title: 'Components/TextField',
  component: TextField,
  decorators: [withKnobs],
};

export const Default = () => (
  <form style={{ maxWidth: 300 }}>
    <Block>
      <TextField
        label="Some text field"
        value={text('Value', `Everything can be happy`)}
        textSize={textSize(1)}
        fontWeight={fontWeight(400)}
        colour={colour('black')}
      />
    </Block>
    <Block>
      <TextField
        label="Some text field"
        value={text('Value', `Everything can be happy`)}
        textSize={textSize(1)}
        fontWeight={fontWeight(400)}
        colour={colour('black')}
        success
      />
    </Block>
    <Block>
      <TextField
        label="Some text field"
        textSize={textSize(1)}
        placeholder="This is placeholder text"
        fontWeight={fontWeight(400)}
        colour={colour('black')}
        error
      />
    </Block>
  </form>
);
