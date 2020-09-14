import { FC, InputHTMLAttributes } from 'react';
import { styled, Colour, FontWeight, withMargin } from '../shared';

export interface TextBoxProps {
  variant?: 'box' | 'underline';
  colour?: Colour;
  display?: 'block' | 'inline-block';
  fontWeight?: FontWeight;
  margin?: string;
  textSize?: number;
  width?: string;
}

const TextBox = styled.input.attrs<TextBoxProps>(({ type = 'text' }) => ({
  type,
}))<TextBoxProps>(
  ({
    colour,
    display,
    textSize,
    margin,
    fontWeight = 400,
    variant,
    width,
    theme: { colours, fontFamily },
  }) => ({
    display,
    fontFamily,
    fontWeight,
    margin,
    width,
    lineHeight: 1,
    border: 'none',
    outline: 'none',
    appearance: 'none',
    padding: '0.2em',
    position: 'relative',
    color: colour && colours[colour],
    fontSize: `${textSize}rem`,
    ...(variant === 'box'
      ? { background: colours.white, borderRadius: '4px' }
      : {
          borderBottom: `solid 3px ${colours[colour || 'darkBlue']}`,
        }),
  })
) as FC<TextBoxProps & InputHTMLAttributes<HTMLInputElement>>;

export default withMargin(TextBox, '0 0 .5rem 0');
