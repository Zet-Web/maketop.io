import React, {useState} from 'react';
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {ModalComponent} from "../component/Modal/ModalComponent";
import alertStyles from "../styles/AlertPages.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import {useRouter} from "next/router";

const Basket = () => {
    const[isOpen,setIsOpen]=useState(false)
    const {query}=useRouter()
    return (
        <div className={styles.background}>
            <div style={{maxWidth:1920,width:"100%",margin:"0 auto",overflowX:"hidden"}}>
                <div className={styles.container}>

                    <Layer type="link">
                        <PageTitle title={'Basket'}/>
                        { isOpen&&
                            < ModalComponent open={isOpen} setOpen={setIsOpen} service={query.service} counts={query.counts} priceValue={query.priceValue} system={query.system}/>}
                        <div className={alertStyles.alertContainer}>
                        <div className={alertStyles.alertBody} style={{maxWidth:360}}>
                            <p className={alertStyles.enjoyTitle} style={{color:"white",fontSize:36}}>Go Buy</p>
                            <p>{`Take 3 steps and get ${query.counts} ${query.service} for your posts`}</p>
                            <ButtonComponent type={"title"} text="Start" onClick={()=>setIsOpen(true)}/>
                        </div>
                        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default Basket;
