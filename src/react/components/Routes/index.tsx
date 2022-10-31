import React from 'react';

import { Public } from '../Public';
import { Main } from '../Main';

export interface IProps {
    className?: string;
}

export const Routes: React.FC = () => {
    const url = new URL(window.location.href);

    const path = url.pathname;

    switch (path) {
        case '/': {
            return <Public />;
        }
        case '/main': {
            return <Main />;
        }
    }

    return null;
};
