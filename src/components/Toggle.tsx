import React, { ChangeEventHandler, FC } from 'react';
import { ReactNode } from 'react';
import { styled } from '../shared';
import Text from './Text';
import { CSSObject } from 'styled-components';

export interface ToggleProps {
  checked?: boolean;
  label: string;
  offLabel?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onLabel?: ReactNode;
}

const Input = styled.input.attrs(() => ({ type: 'checkbox' }))(
  () =>
    ({
      position: 'absolute',
      opacity: 0,
      zIndex: -1,
    } as CSSObject)
);

const Control = styled.label(
  ({ theme: { colours } }) =>
    ({
      display: 'block',
      width: '2em',
      height: '1em',
      position: 'relative',
      pointerEvents: 'none',
      '::before': {
        content: '""',
        position: 'absolute',
        top: '0.05em',
        left: 0,
        width: '2.2em',
        height: '0.9em',
        borderRadius: '0.5em',
        background: colours.green,
        boxShadow: 'inset 0 0.1em 0.3em 0.1em rgba(0,0,0,0.3)',
        pointerEvents: 'none',
      },
      '::after': {
        content: '""',
        position: 'absolute',
        top: '-0.15em',
        left: 0,
        width: '0.8em',
        height: '0.8em',
        borderRadius: '0.8em',
        border: `solid 0.23em ${colours.white}`,
        boxShadow: '0 0.1em 0.2em rgba(0,0,0,0.5)',
        background: colours.darkBlue,
        transition: 'left 150ms ease',
        pointerEvents: 'none',
      },
      'input:checked~ &::after': {
        left: '1em',
      },
    } as CSSObject)
);

const Wrap = styled.label(
  () =>
    ({
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      userSelect: 'none',
      cursor: 'pointer',
    } as CSSObject)
);

const Toggle: FC<ToggleProps> = ({
  offLabel,
  onLabel,
  checked,
  onChange,
  label,
}) => (
  <Wrap>
    {offLabel && (
      <Text mB="0" mR=".5em" lineHeight={1}>
        {offLabel}
      </Text>
    )}
    <Input checked={checked} onChange={onChange} />
    <Control aria-label={label} />
    {onLabel && (
      <Text mB="0" mL=".7em" lineHeight={1}>
        {onLabel}
      </Text>
    )}
  </Wrap>
);

export default Toggle;
