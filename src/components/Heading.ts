import { FC } from 'react';
import { styled, Colour, FontWeight, withMargin } from '../shared';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  colour?: Colour;
  fontWeight?: FontWeight;
  level?: HeadingLevel;
  lineHeight?: number;
  margin?: string;
  maxWidth?: string;
  text?: string;
  textAlign?: 'left' | 'center' | 'right';
  textSize?: number;
}

const getLevelSize = (level: HeadingLevel) => (6 - level) / 4 + 1.75;
const getSizeLevel = (size: number) => {
  if (size < 1.25) {
    return 6;
  }
  if (size >= 2.75) {
    return 1;
  }
  return 6 - Math.floor((size - 1.75) / 0.25);
};
const Heading = styled.div.attrs<HeadingProps>(
  ({ children, text, textSize, level = 4 }) => ({
    children: text || children,
    role: 'heading',
    'aria-level': textSize ? getSizeLevel(textSize) : level,
  })
)<HeadingProps>(
  ({
    colour,
    margin,
    maxWidth,
    textAlign,
    textSize,
    fontWeight = 600,
    level = 4,
    lineHeight = 1.05,
    theme: { colours, fontFamily },
  }) => ({
    fontFamily,
    fontWeight,
    margin,
    maxWidth,
    lineHeight,
    textAlign,
    color: colour && colours[colour],
    fontSize: `${textSize || getLevelSize(level)}rem`,
  })
) as FC<HeadingProps>;

export default withMargin(Heading, '0 0 .5em 0');
