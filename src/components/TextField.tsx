import React, { FC, InputHTMLAttributes } from 'react';
import { styled, Colour, FontWeight, withMargin } from '../shared';
import { Check, Cross } from '../icons';

import Block from './Block';

export interface TextBoxProps {
  colour?: Colour;
  borderColour?: Colour;
  display?: 'block' | 'inline-block';
  fontWeight?: FontWeight;
  margin?: string;
  textSize?: number;
  width?: string;
  success?: boolean;
  error?: boolean;
  label: string;
}

interface LabelProps {
  label: string;
}

const Label = styled.label.attrs<LabelProps>(({ label }) => ({
  'aria-label': label,
  children: label,
}))<TextBoxProps>(
  ({ colour, success, error, theme: { colours, fontFamily } }) => ({
    colour: (() => {
      if (error) {
        return colours.red;
      }

      if (success) {
        return colours.green;
      }

      return colour ? colours[colour] : colours.black;
    })(),
    fontFamily,
    fontWeight: 400,
    lineHeight: 1.4,
    marginBottom: '0.2em',
  })
);

const TextFieldRoot = styled.input.attrs<TextBoxProps>(
  ({ type = 'text', label }) => ({
    type,
    label,
    'aria-label': label,
  })
)<TextBoxProps>(
  ({
    display = 'block',
    textSize,
    margin,
    fontWeight = 400,
    width = '100%',
    theme: { colours, fontFamily },
    colour = 'black',
    borderColour = 'coolGrey',
    success = false,
    error = false,
  }) => ({
    display,
    fontFamily,
    fontWeight,
    margin,
    width,
    lineHeight: 1,
    border: `1px solid ${colours[borderColour]}`,
    boxShadow: 'none',
    borderRadius: 5,
    padding: '1rem',
    outline: 'none',
    appearance: 'none',
    position: 'relative',
    color: colour && colours[colour],
    fontSize: `${textSize}rem`,
    '&:focus': {
      border: `1px solid ${colours.blue}`,
    },
    ...(success
      ? {
          border: `1px solid ${colours.green}`,
        }
      : {}),
    ...(error
      ? {
          border: `1px solid ${colours.red}`,
        }
      : {}),
  })
) as FC<TextBoxProps & InputHTMLAttributes<HTMLInputElement>>;

const Icon = styled.div.attrs<any>(({ children }) => ({ children }))<any>(
  ({ position = 'absolute' }) => ({
    position,
    zIndex: 1,
    right: '-1.7rem',
    top: '2.425rem',
  })
);

const TextField: FC<
  TextBoxProps & InputHTMLAttributes<HTMLInputElement>
> = props => (
  <Block display="block" position="relative">
    <Label label={props.label} />

    <TextFieldRoot {...props} />
    <Icon>
      {props.success && <Check colour="green" />}
      {props.error && <Cross colour="red" />}
    </Icon>
  </Block>
);

export default withMargin(TextField, '0 0 .5rem 0');
