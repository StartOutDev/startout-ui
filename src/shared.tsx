import React, { FC, PropsWithChildren } from "react";
import * as styledComponents from "styled-components";
import theme from "./theme";
import { Margins, getMargin } from "./utilities/getMargin";
import { getPadding, Paddings } from "./utilities/getPadding";

export const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider: ProviderBase,
  ThemeContext,
  withTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export type ThemedProps<P> = styledComponents.ThemedStyledProps<P, Theme>;

export const ThemeProvider: FC = ({ children }) => (
  <ProviderBase theme={theme}>{children}</ProviderBase>
);

export function withMargin<P extends { margin?: string }>(
  Component: FC<P>,
  defaultMargin?: string
) {
  return (props: PropsWithChildren<P & Margins>) => (
    <Component
      {...props}
      margin={getMargin({ margin: defaultMargin, ...props })}
    />
  );
}

export function withPadding<P extends { padding?: string }>(
  Component: FC<P>,
  defaultPadding?: string
) {
  return (props: PropsWithChildren<P & Paddings>) => (
    <Component
      {...props}
      padding={getPadding({ padding: defaultPadding, ...props })}
    />
  );
}

export type FontWeight = 400 | 500 | 600 | 700;
export type Theme = typeof theme;
export type Colour = keyof Theme["colours"];
