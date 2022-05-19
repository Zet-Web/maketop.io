import React from 'react';
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import alertStyles from "../styles/AlertPages.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";

const Contact = () => {
    return (
        <div className={styles.background}>
            <div style={{maxWidth:1920,width:"100%",margin:"0 auto",overflowX:"hidden"}}>
                <div className={styles.container}>
                    <Layer type="link">
                        <div className={`container`}>
                            <PageTitle title={'Contact us'}/>

                            <div className={alertStyles.alertContainer}>
                                <p className={alertStyles.alertTitle} >Contact Us</p>
                                <div style={{display:'flex',flexDirection:"row",gap:20,flexWrap:"wrap",maxWidth:1400,width:"100%",justifyContent:"center"}}>
                                    <div className={alertStyles.alertBody} style={{maxWidth:360}}>
                                        <p className={alertStyles.enjoyTitle} style={{color:"white",fontSize:36}}>Emily Smith</p>
                                        <ButtonComponent type={"title"} text="support@maketop.net"/>
                                        <p>Request any information concerning our service and your order</p>
                                    </div>
                                    <div className={alertStyles.alertBody} style={{maxWidth:360}}>
                                        <p className={alertStyles.enjoyTitle} style={{color:"white",fontSize:36}}>Ann Brown</p>
                                        <ButtonComponent type={"title"} text="pr@maketop.net"/>
                                        <p>Please, use the email for media and PR</p>
                                    </div>
                                    <div className={alertStyles.alertBody} style={{maxWidth:360}}>
                                        <p className={alertStyles.enjoyTitle} style={{color:"white",fontSize:36}}>Jhon Mayer</p>
                                        <ButtonComponent type={"title"} text="partners@maketop.net"/>
                                        <p>Request any information concerning possible opportunities</p>


                                    </div>
                                </div>
                            </div>



        </div>
                    </Layer>
                </div>
            </div>
        </div>
    );
};

export default Contact;
