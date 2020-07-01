import { FC } from "react";
import { styled, Colour, FontWeight, withMargin } from "../shared";

export interface TextProps {
  colour?: Colour;
  display?: "inline" | "block" | "inline-block";
  fontWeight?: FontWeight;
  lineHeight?: number;
  margin?: string;
  maxWidth?: string;
  text?: string;
  textAlign?: "left" | "center" | "right";
  textSize?: number;
}

const Text = styled.div.attrs<TextProps>(({ children, text }) => ({
  children: text || children,
}))<TextProps>(
  ({
    colour,
    display,
    maxWidth,
    textAlign,
    textSize,
    margin,
    fontWeight = 400,
    lineHeight = 1.4,
    theme: { colours, fontFamily },
  }) => ({
    display,
    fontFamily,
    fontWeight,
    lineHeight,
    margin,
    maxWidth,
    textAlign,
    color: colour && colours[colour],
    fontSize: textSize && `${textSize}rem`,
  })
) as FC<TextProps>;

export default withMargin(Text, "0 0 .5rem 0");
