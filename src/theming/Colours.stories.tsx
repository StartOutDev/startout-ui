import React from "react";
import Block from "../components/Block";
import theme from "../theme";
import Text from "../components/Text";
import { Colour } from "../shared";

export default {
  title: "Theming/Colours",
  component: React.Fragment,
};

export const Page = () => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {Object.keys(theme.colours).map(colour => (
      <div
        key={colour}
        style={{
          flex: "0 0 33.33333%",
          maxWidth: "33.33333%",
          display: "flex",
          alignItems: "middle",
        }}
      >
        <Block
          padding=".5rem"
          margin="0 .5rem 0 0"
          display="inline-block"
          background={colour as Colour}
        />
        <Text text={colour} display="inline-block" margin="1rem 0" />
      </div>
    ))}
  </div>
);
