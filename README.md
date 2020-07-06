# StartOut UI

Design system for StartOut Australia.

## Setup

In your project, first install `@startout/ui`.

```bash
$ yarn add @startout/ui
```

At the entry of your application, import the `ThemeProvider` component.

```ts
import { ThemeProvider } from "@startout/ui";
```

Finally, render the `ThemeProvider` and any components within:

```tsx
import { ThemeProvider, Block, Text } from "@startout/ui";

export default () => (
  <ThemeProvider>
    <Block>
      <Text>I love StartOut</Text>
    </Block>
  </ThemeProvider>
);
```

## Local Development

This project uses `yarn` to manage dependencies.

Develop using the storybook server.

```bash
$ yarn
$ yarn storybook
```
