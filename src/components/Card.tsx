import React, { FC } from "react";
import { styled, Colour, withMargin, withPadding } from "../shared";

type ColourVariant = "white" | "yellow";

export interface CardProps {
  alignItems?: "center" | "start" | "end";
  background?: ColourVariant;
  display?: "inline" | "block" | "inline-block" | "flex";
  flex?: string;
  flexGrow?: number;
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  padding?: string;
  margin?: string;
  maxWidth?: string;
  textAlign?: "left" | "center" | "right";
}

const borderColours: Record<ColourVariant, string> = {
  white: "#B0CAC8",
  yellow: "#F1CD32",
};

const textColours: Record<ColourVariant, Colour> = {
  white: "darkBlue",
  yellow: "darkerGrey",
};

const Card = styled.div<CardProps>(
  ({
    alignItems,
    display,
    flex,
    flexGrow,
    justifyContent,
    maxWidth,
    margin,
    background = "white",
    padding,
    textAlign = "center",
    theme: { colours },
  }) => ({
    alignItems,
    display,
    flex,
    flexGrow,
    justifyContent,
    margin,
    maxWidth,
    padding,
    position: "relative",
    textAlign,
    background: colours[background],
    border: `solid 1px ${borderColours[background]}`,
    borderRadius: "4px",
    boxSizing: "border-box",
    color: colours[textColours[background]],
    zIndex: 2,
  })
);

const CardWrap = styled.div<CardProps>(({ flex, flexGrow }) => ({
  flex,
  flexGrow,
  display: "flex",
  position: "relative",
  zIndex: 1,
  "::before": {
    content: `""`,
    display: "block",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: 0,
    filter: "blur(20px)",
    background: "rgba(0,0,0,0.15)",
  },
}));

const WrappedCard: FC<CardProps> = ({ margin, flexGrow, ...rest }) => (
  <CardWrap flexGrow={flexGrow} margin={margin}>
    <Card {...rest} flexGrow={1} />
  </CardWrap>
);

export default withPadding(withMargin(WrappedCard), "1.5rem");
