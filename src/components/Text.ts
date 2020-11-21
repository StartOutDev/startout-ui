import { FC } from 'react';
import { styled, Colour, FontWeight, withMargin } from '../shared';

export interface TextProps {
  colour?: Colour;
  display?: 'inline' | 'block' | 'inline-block';
  fontWeight?: FontWeight;
  lineHeight?: number;
  margin?: string;
  maxWidth?: string;
  text?: string;
  textAlign?: 'left' | 'center' | 'right';
  textSize?: number;
  variant?: 'plain' | 'underline';
  height?: number,
}

const Text = styled.div.attrs<TextProps>(({ children, text }) => ({
  children: text || children,
}))<TextProps>(
  ({
    colour,
    display,
    maxWidth,
    textAlign,
    textSize = 'center',
    margin,
    variant,
    fontWeight = 400,
    lineHeight = 1.4,
    theme: { colours, fontFamily },
    height = 'auto',
  }) => ({
    display,
    fontFamily,
    fontWeight,
    lineHeight,
    margin,
    maxWidth,
    textAlign,
    color: colour && colours[colour],
    height,
    fontSize: textSize && `${textSize}rem`,
    ...(variant === 'underline' ?
      {
        textDecoration: `underline`,
        cursor: `pointer`,
      }
      : { border: `none` }),
  })
) as FC<TextProps>;

export default withMargin(Text, '0 0 .5rem 0');
