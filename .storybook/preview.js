import { addDecorator, addParameters } from "@storybook/react";
import ThemeDecorator from "./ThemeDecorator";

addDecorator(ThemeDecorator);

addParameters({
  options: {
    showRoots: true,
  },
});
