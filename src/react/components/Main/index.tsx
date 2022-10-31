import React from 'react';
import styles from './styles.module.scss';

export const Main = React.memo(() => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Main Page</h1>
        </div>
    );
});
