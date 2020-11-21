import React, { FC, useContext } from 'react';
import { ThemeContext } from '../shared';
import { IconProps } from '.';

const Menu: FC<IconProps> = ({ colour = 'black', size = 24 }) => {
    const { colours } = useContext(ThemeContext);

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
                fill={colours[colour]}
            />
        </svg>
    );
};

export default Menu;
