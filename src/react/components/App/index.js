import React from 'react';
import styles from './styles.module.scss';
import icon from './assets/react-icon.svg';
export const App = React.memo(() => {
    const onclick = () => {
        alert('Hello! This is test project');
    };
    return (React.createElement("div", { className: styles.container },
        React.createElement("img", { src: icon, alt: 'react icon', className: styles.icon }),
        React.createElement("h1", { className: styles.title }, "Hello World"),
        React.createElement("button", { className: styles.button, onClick: onclick }, "button")));
});
