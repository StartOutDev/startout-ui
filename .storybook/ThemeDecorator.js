import React from "react";
import { ThemeProvider } from "../src/shared";

const ThemeDecorator = (fn) => <ThemeProvider>{fn()}</ThemeProvider>;
export default ThemeDecorator;
