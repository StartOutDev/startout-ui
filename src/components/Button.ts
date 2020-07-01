import { styled, Colour, FontWeight, ThemedProps } from "../shared";
import { CSSObject } from "styled-components";

export interface ButtonProps {
  background?: Colour;
  display?: "block" | "inline-block";
  fontWeight?: FontWeight;
  margin?: string;
  text?: string;
  textColour?: Colour;
  textSize?: number;
}

const makeStyle = ({
  margin,
  background = "red",
  display = "inline-block",
  textColour = "white",
  textSize = 1.15,
  fontWeight = 400,
  theme: { colours, fontFamily },
}: ThemedProps<ButtonProps>): CSSObject => ({
  display,
  fontFamily,
  fontWeight,
  margin,
  background: colours[background],
  border: "none",
  borderRadius: "1.5em",
  color: colours[textColour],
  cursor: "pointer",
  fontSize: `${textSize}rem`,
  lineHeight: 1,
  outline: "none",
  padding: ".9em 1.7em",
  textDecoration: "none",
  touchAction: "manipulation",
  transition: "filter .5s ease-out",
  userSelect: "none",
  ":hover": {
    filter: "saturate(1.2) brightness(1.1)",
    transition: "filter 50ms",
  },
  ":active": {
    filter: "brightness(1.25)",
    transition: "filter .1s",
  },
});

const Button = styled.button.attrs<ButtonProps>(({ text, children }) => ({
  children: text || children,
}))<ButtonProps>(makeStyle);

export const ButtonLink = styled.a.attrs<ButtonProps>(({ text, children }) => ({
  children: text || children,
}))<ButtonProps>(makeStyle);

export default Button;
