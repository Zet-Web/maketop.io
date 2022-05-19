import React, { useState } from 'react';
import styles from "./Modal.module.sass";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

const ModalEmail = ({ setModal, service, counts, priceValue, setUserEmail, userEmail, getPosts, errorMessage, system }) => {
    const [email, setEmail] = useState(null)
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [checkText, setCheckText] = useState(false)
    const [progressValue, setProgressValue] = useState(0)
    const fillProgress = async () => {
        for (let index = 0; index <= 100; index++) {
            setTimeout(() => {
                setProgressValue(index)
            }, 500);


        }
    }
    const validateEmail = (userEmail) => {
        setError(userEmail
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))
    };
    return (
        < >
            <div className={styles.modal_title}><p style={{ color: " rgba(40, 95, 255, 1)" }}>{counts} {system} {service}</p><p>|</p> ${priceValue} One Time</div>
            <div className={styles.modal_stageBlock}>
                <img src="/stageLine0.5.svg" className={styles.absoluteLine} />
                <div className={styles.modal_stageItem_active}>
                    <p>01</p>
                </div>

                <div className={styles.modal_stageItem_active}>
                    <p>02</p>
                </div>
                <div className={styles.modal_stageItem}>
                    <p>03</p>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <p>Your email</p>
                <input placeholder="Email" onChange={(e) => setUserEmail(prev => e.target.value)} />

            </div>
            <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>
            {/*{error!==null&&error&&<p style={{color:'red',textAlign:'center'}}>Email is empty</p>}*/}
            <div className={styles.button_wrapper}>
                <ButtonComponent type="title" text={checkText && userEmail ? "Loading..." : "Next"} onClick={async () => {
                    setCheckText(true)
                    await fillProgress()
                    setTimeout(() => {


                        setCheckText(false)
                        setProgressValue(0)


                        getPosts()
                        console.log(userEmail)
                    }, 3000);




                }} />
                <progress style={{ display: checkText && userEmail ? "block" : "none" }}
                    id={styles.modal_progress}
                    min={0} max={100} value={progressValue}
                />
            </div>
        </ >
    );
};

export default ModalEmail;
