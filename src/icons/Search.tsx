import React, { FC, useContext } from 'react';
import { ThemeContext } from '../shared';
import { IconProps } from '.';

const Search: FC<IconProps> = ({ colour = 'black', size = 24 }) => {
    const { colours } = useContext(ThemeContext);

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 13.261719 14.867188 L 15.742188 17.347656 C 15.363281 18.070312 15.324219 18.789062 15.722656 19.1875 L 20.25 23.714844 C 20.820312 24.285156 22.0625 23.972656 23.015625 23.015625 C 23.972656 22.058594 24.285156 20.820312 23.714844 20.25 L 19.191406 15.722656 C 18.789062 15.324219 18.070312 15.363281 17.347656 15.738281 L 14.867188 13.261719 Z M 8.5 0 C 3.804688 0 0 3.804688 0 8.5 C 0 13.195312 3.804688 17 8.5 17 C 13.195312 17 17 13.195312 17 8.5 C 17 3.804688 13.195312 0 8.5 0 Z M 8.5 15 C 4.910156 15 2 12.089844 2 8.5 C 2 4.910156 4.910156 2 8.5 2 C 12.089844 2 15 4.910156 15 8.5 C 15 12.089844 12.089844 15 8.5 15 Z M 8.5 15"
                fill={colours[colour]}
            />
        </svg>
    );
};

export default Search;
