import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';
import TextArea from './TextArea';
import { fontWeight, colour, textSize } from '../stories';

export default {
    title: 'Components/TextArea',
    component: TextArea,
    decorators: [withKnobs],
};

export const Box = () => (
    <TextArea
        variant="box"
        value={text('Value', `Hello`)}
        textSize={textSize(1)}
        fontWeight={fontWeight(400)}
        colour={colour('darkBlue')}
        margin={text('Margin', '')}
        padding={text('Padding', '5rem')}

    />
);
