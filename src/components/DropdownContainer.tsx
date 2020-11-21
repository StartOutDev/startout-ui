import { FC } from 'react';
import { styled, Colour, withMargin } from '../shared';

export interface DropdownProps {
    display?: 'inline' | 'block' | 'inline-block' | 'none';
    margin?: string;
    position?: 'absolute' | 'inherit';
    width?: number;
    backgroundColor?: Colour;
    top?: number;
    left?: number;
}

const DropdownContainer = styled.div.attrs<DropdownProps>(({ children }) => ({ children }))<DropdownProps>(
    ({
        display,
        margin,
        position,
        width,
        backgroundColor,
        theme: { colours },
        top = 30,
        left = -10,
    }) => ({
        display,
        margin,
        position,
        width,
        backgroundColor: backgroundColor && colours[backgroundColor],
        top,
        left,
    })
) as FC<DropdownProps>;

export default withMargin(DropdownContainer, '0 0 .5rem 0');
