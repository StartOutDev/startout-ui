import { FC } from 'react';
import { styled, Colour, withMargin, withPadding } from '../shared';

export interface BlockProps {
  alignItems?: 'center' | 'start' | 'end';
  background?: Colour;
  display?: 'inline' | 'block' | 'inline-block' | 'flex' | 'none';
  flex?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexGrow?: number;
  flexWrap?: 'wrap';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between';
  padding?: string;
  position?: 'relative';
  margin?: string;
  maxWidth?: string;
  textAlign?: 'left' | 'center' | 'right';
  textColour?: Colour;
  textSize?: number;
  zIndex?: number;
}

const Block = styled.div.attrs(({ children }) => ({ children }))<BlockProps>(
  ({
    alignItems,
    background,
    display,
    flex,
    flexDirection,
    flexGrow,
    flexWrap,
    justifyContent,
    maxWidth,
    margin,
    padding,
    position,
    textAlign,
    textColour,
    textSize,
    zIndex,
    theme: { colours },
  }) => ({
    alignItems,
    display,
    flex,
    flexDirection,
    flexGrow,
    flexWrap,
    justifyContent,
    margin,
    maxWidth,
    padding,
    position,
    textAlign,
    zIndex,
    color: textColour && colours[textColour],
    background: background && colours[background],
    boxSizing: 'border-box',
    fontSize: textSize && `${textSize}rem`,
  })
) as FC<BlockProps>;

export default withPadding(withMargin(Block));
