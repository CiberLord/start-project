import React from 'react';
import styles from './styles.module.scss';

import icon from './assets/react-icon.svg';

export const App = React.memo(() => {
    const onclick = () => {
        alert('Hello! This is test project');
    };

    return (
        <div className={styles.container}>
            <img
                src={icon}
                alt='react icon'
                className={styles.icon}
            />
            <h1 className={styles.title}>Hello World</h1>
            <button
                className={styles.button}
                onClick={onclick}>
                button
            </button>
        </div>
    );
});
