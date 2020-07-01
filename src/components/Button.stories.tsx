import { withKnobs, text } from "@storybook/addon-knobs";
import React from "react";
import Button, { ButtonLink } from "./Button";
import { fontWeight, colour, textSize } from "../stories";

export default {
  title: `Components/Button`,
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => (
  <Button
    text={text("Text", "Pride")}
    textSize={textSize(1)}
    fontWeight={fontWeight(600)}
    textColour={colour("white", "Text colour")}
    background={colour("red", "Background")}
  />
);

export const Link = () => (
  <ButtonLink
    text={text("Text", "Sunshine")}
    textSize={textSize(1)}
    fontWeight={fontWeight(600)}
    textColour={colour("white", "Text colour")}
    background={colour("red", "Background")}
  />
);
