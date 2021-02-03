import { FC, InputHTMLAttributes } from 'react';
import { styled, Colour, FontWeight, withMargin } from '../shared';

type ColourVariant = 'white' | 'yellow';

export interface TextAreaProps {
  variant?: 'box' | 'underline';
  background?: ColourVariant;
  colour?: Colour;
  display?: 'block' | 'inline-block';
  fontWeight?: FontWeight;
  margin?: string;
  padding?: string;
  multiline?: string;
  rows?: number,
  rowsMax?: number,
  textSize?: number;
  width?: string;
}

const borderColours: Record<ColourVariant, string> = {
  white: '#B0CAC8',
  yellow: '#F1CD32',
};

const TextArea = styled.input.attrs<TextAreaProps>(({ type = 'text' }) => ({
  type,
}))<TextAreaProps>(
  ({
    colour,
    display,
    textSize,
    margin,
    fontWeight = 400,
    variant,
    width,
    padding,
    background = 'white',
    multiline,
    rows = 5,
    rowsMax = 15,
    theme: { colours, fontFamily },
  }) => ({
    display,
    fontFamily,
    fontWeight,
    margin,
    width,
    multiline,
    rows,
    rowsMax,
    lineHeight: 1,
    background: colours[background],
    border: `solid 1px ${borderColours[background]}`,
    borderRadius: '4px',
    boxSizing: 'border-box',
    outline: 'none',
    appearance: 'none',
    padding,
    position: 'relative',
    color: colour && colours[colour],
    fontSize: `${textSize}rem`,
    ...(variant === 'box'
      ? { background: colours.white, borderRadius: '4px' }
      : {
        borderBottom: `solid 3px ${colours[colour || 'darkBlue']}`,
      }),
  })
) as FC<TextAreaProps & InputHTMLAttributes<HTMLInputElement>>;

export default withMargin(TextArea, '0 0 .5rem 0');
