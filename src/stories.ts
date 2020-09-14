import { number, select } from '@storybook/addon-knobs';
import { FontWeight, Colour } from './shared';
import theme from './theme';

export const fontWeight = (
  defaultValue: FontWeight,
  name = 'Font weight',
  groupId?: string
) =>
  number(
    name,
    defaultValue,
    {
      range: true,
      min: 400,
      max: 700,
      step: 100,
    },
    groupId
  ) as FontWeight;

export const colour = (
  defaultValue: Colour,
  name = 'Colour',
  groupId?: string
) => select(name, Object.keys(theme.colours), defaultValue, groupId) as Colour;

export const textSize = (
  defaultValue: number,
  name = 'Text size',
  groupId?: string
) => number(name, defaultValue, { step: 0.5 }, groupId);
