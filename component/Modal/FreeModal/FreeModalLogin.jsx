import React, {useState} from 'react';
import styles from '../Modal.module.sass';
import {ButtonComponent} from "../../ButtonComponent/ButtonComponent";
const FreeModalLogin = ({setModal,userName,service,setUserName}) => {

    return (
        < >
            <p className={styles.modal_title}>Free Instagram {service}</p>
            <div className={styles.modal_stageBlock}>
                <div className={styles.modal_stageItem_active}>
                    <p>01</p>
                </div>
                <img src="/stageLine0.svg"/>
                <div className={styles.modal_stageItem}>
                    <p>02</p>
                </div>
            </div>
            <div style={{width:"100%"}}>
                <p>Instagram username (Login)</p>
                <input placeholder="Username" onChange={(e) => setUserName(prev => e.target.value)}/>
            </div>
            <ButtonComponent type="title" text="Next" onClick={()=>setModal(2)}/>
        </ >
    );
};

export default FreeModalLogin;
