import React, {useState} from 'react';
import styles from "./Modal.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import {Check, Delete} from "@material-ui/icons";

const ModalAccount = ({setModal,userInfo,userName}) => {
    const[email,setEmail]=useState(null)
    const[error,setError]=useState([])
    const [activePost, setActivePost] = useState([])
    const deleteActivePost = (index) => {
        const newPost = activePost.filter(post => post !== index)
        setActivePost(newPost)
    }
    const validateEmail = (email) => {
        setError( email
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))
    };
    return (
        < >
            <div  ><p className={styles.modal_title}>Choose Account</p></div>
            <div className={styles.modal_stageBlock}>
                <img src="/stageLine0.5.svg" className={styles.absoluteLine}/>
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

            <ButtonComponent type="outline" text="Add new one" onClick={()=> setModal('account')}/>
            <div className={styles.modal_account_block}>
                <div className={styles.modal_account_block_item}>
                    <div   className={styles.account_icons}>
                        <img src={userInfo?.avatar}/>
                        {userName}
                    </div>
                    <div className={styles.account_icons}>
                        <div className={styles.modal_account_block_circle}>
                            <Check style={{color:"rgba(15, 133, 255, 1)"}}/>
                        </div>
                        <div className={styles.modal_account_block_circle}>
                            <Delete style={{color:"rgba(15, 133, 255, 1)"}}/>
                        </div>
                    </div>
                </div>
                {/*<div className={styles.modal_account_block_item}>*/}
                {/*    <div   className={styles.account_icons}>*/}
                {/*        <img src="accountAvatar.svg"/>*/}
                {/*        <p>Barbara </p>*/}
                {/*    </div>*/}
                {/*    <div className={styles.account_icons}>*/}
                {/*        <div className={styles.modal_account_block_circle}>*/}
                {/*            <Check style={{color:"rgba(15, 133, 255, 1)"}}/>*/}
                {/*        </div>*/}
                {/*        <div className={styles.modal_account_block_circle}>*/}
                {/*            <Delete style={{color:"rgba(15, 133, 255, 1)"}}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.modal_account_block_item}>*/}
                {/*    <div   className={styles.account_icons}>*/}
                {/*        <img src="accountAvatar.svg"/>*/}
                {/*        <p>Barbara </p>*/}
                {/*    </div>*/}
                {/*    <div className={styles.account_icons}>*/}
                {/*        <div className={styles.modal_account_block_circle}>*/}
                {/*            <Check style={{color:"rgba(15, 133, 255, 1)"}}/>*/}
                {/*        </div>*/}
                {/*        <div className={styles.modal_account_block_circle}>*/}
                {/*            <Delete style={{color:"rgba(15, 133, 255, 1)"}}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            {/*<div style={{width:"100%"}}>*/}
            {/*    <p>Your email</p>*/}
            {/*    <input placeholder="customer@mail.com" onChange={(e)=>setEmail(e.target.value)}/>*/}
            {/*    {email&&error===null&&<p style={{color:'red',fontSize:12}}>You entered an invalid email</p>}*/}
            {/*</div>*/}
            <ButtonComponent type="title" text="Next" onClick={()=> setModal(4)}/>
        </ >
    );
};

export default ModalAccount;
