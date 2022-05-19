import React from 'react';
import styles from "../styles/Home.module.sass";
import {PageTitle} from "../component/PageTitle/PageTitle";
import {Layer} from "../component/Layer/Layer";
import supportStyles from "../styles/Support.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import questionsStyle from "../component/Questions/Questions.module.sass";
import Questions from "../component/Questions/Questions";
import {frequentQuestions} from "../questions/Questions";
import Head from 'next/head'
const Support = () => {
    return (
        <div className={styles.background} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>MakeTop | Support</title>
                <meta name="description" content="MakeTop Support "/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="MakeTop | Support "/>
                <meta property="og:description" content="Tagiamtop Support"/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:site_name" content="MakeTop"/>
                <link rel="canonical" href="https://likes.io/support"/>
            </Head>
        <div style={{maxWidth: 1920, width: "100%", margin: "0 auto", overflowX: "hidden"}}>
            <div className={styles.container}>
                <div className={styles.background}/>
                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={'Support'}/>
                        <div className={supportStyles.support_container}>
                            <p className={supportStyles.support_title}>Support</p>
                            <div className={supportStyles.supportForm}>
                                <div className={supportStyles.firstFormRow}>
                                <div>
                                    <p>Your name*</p>
                                    <input placeholder="Name"/>
                                </div>
                                <div>
                                    <p>Your email</p>
                                    <input placeholder="Email"/>
                                </div>
                                </div>
                                <div>
                                    <p>Your message</p>
                                    <textarea placeholder="Message"/>
                                </div>
                            </div>
                            <ButtonComponent type={"title"} text="Send"/>
                            <p style={{textAlign:'center'}}>Request any information concerning our</p>
                        </div>
                        <div className={questionsStyle.questions}>
                            <p className={questionsStyle.questions_title}>FREQUENTLY ASKED QUESTIONS</p>
                            <span className={questionsStyle.questions_text}>Do you have questions about our service? Here are our most frequently asked questions:</span>
                            <Questions questions={frequentQuestions}/>
                        </div>

                    </div>
                </Layer>
            </div>
        </div>
        </div>
    );
};

export default Support;
