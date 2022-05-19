import React from "react";
import styles from './PageTitle.module.sass';

export const PageTitle = ({title}) => {
    return (
        <div className={`container ${styles.container}`}>
            <a href="/">Home</a>
            <span>|</span>
            <span>{title}</span>
        </div>
    )
}
