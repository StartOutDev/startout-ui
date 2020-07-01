import { withKnobs, text } from "@storybook/addon-knobs";
import React from "react";
import Block from "./Block";
import { colour } from "../stories";

export default {
  title: `Components/Block`,
  component: Block,
  decorators: [withKnobs],
};

export const Default = () => (
  <Block
    margin={text("Margin", "")}
    padding={text("Padding", "20rem")}
    background={colour("paleBlue", "Background")}
  />
);
