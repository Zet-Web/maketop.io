import React from 'react';
import styles from "../styles/AlertPages.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";

const Error = () => {
    return (
        <div className={styles.alertContainer}>
            <p className={styles.alertTitle}>PAYMENT ERROR</p>
            <div className={styles.alertBody}>
                <p className={styles.alertBody_title}>For now, we haven't received your payment</p>
                <p>But it may come to our account with time. Please check your email address for a letter saying whether
                    we have received your payment. After this, your order will be realized according to its description.
                    If not - please, write to our supportAnThank you for staying with us!</p>
                <div className={styles.alertButtons}>
                    <ButtonComponent type={"title"}  text="Create now" style={{background:"transparent",border:" 2px solid rgba(16, 132, 255, 1)"}}  />
                    <ButtonComponent type={"title"}  text="Sing Up"  />

                </div>
            </div>
        </div>
    );
};

export default Error;
