import React, {useState} from 'react';
import styles from "../Modal.module.sass";
import {ButtonComponent} from "../../ButtonComponent/ButtonComponent";

const FreeModalEmail = ({setModal,setUserEmail,system,getPosts,errorMessage,service}) => {

    const[error,setError]=useState([])
    const validateEmail = (email) => {
        setError( email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))
    };
    return (
        < >
            <p className={styles.modal_title}>Free Instagram {service}</p>
            <div className={styles.modal_stageBlock}>

                <div className={styles.modal_stageItem_active}>
                    <p>01</p>
                </div>
                <img src="/stageLine0.25.svg"/>
                <div className={styles.modal_stageItem}>
                    <p>02</p>
                </div>
            </div>
            <div style={{width:"100%"}}>
                <p>Your email</p>
                <input placeholder="Email" onChange={(e)=>setUserEmail(e.target.value)}/>

            </div>
            <p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>
            <ButtonComponent type="title" text="Next" onClick={getPosts}/>
        </ >
    );
};

export default FreeModalEmail;
