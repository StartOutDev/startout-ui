import { withKnobs, text } from "@storybook/addon-knobs";
import React from "react";
import TextBox from "./TextBox";
import { fontWeight, colour, textSize } from "../stories";

export default {
  title: "Components/TextBox",
  component: TextBox,
  decorators: [withKnobs],
};

export const Box = () => (
  <TextBox
    variant="box"
    value={text("Value", `Everything can be happy`)}
    textSize={textSize(1)}
    fontWeight={fontWeight(400)}
    colour={colour("darkBlue")}
  />
);

export const Underline = () => (
  <TextBox
    variant="underline"
    value={text("Value", `Everything can be happy`)}
    textSize={textSize(1)}
    fontWeight={fontWeight(400)}
    colour={colour("darkBlue")}
  />
);
