import React from 'react';
import styles from "../styles/Home.module.sass";
import {PageTitle} from "../component/PageTitle/PageTitle";
import {Layer} from "../component/Layer/Layer";
import supportStyles from "../styles/Support.module.sass"
import Head from "next/head";

const PrivacyPolicy = () => {
    return (<div className={styles.background}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>MakeTop | Privacy Policy</title>
                <meta name="description" content="MakeTop Privacy Policy "/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="MakeTop | Privacy Policy "/>
                <meta property="og:description" content="Tagiamtop Privacy Policy"/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:site_name" content="MakeTop"/>
                <link rel="canonical" href="https://likes.io/privacy-policy"/>
            </Head>
        <div style={{maxWidth: 1920, width: "100%", margin: "0 auto", overflowX: "hidden"}}>
            <div className={styles.container}>

                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={'Privacy Policy'}/>
                        <div className={supportStyles.support_container}>
                            <p className={supportStyles.support_title}>Privacy Policy</p>
                            <div className={supportStyles.support_text}> <p>
                                Here at Likes.io, we value both privacy and security of our customers, both existing and
                                potential. On this page you will find a brief outline that contains information that we
                                generally receive from those visiting our website paired with short and concise
                                descriptions for each. If you still have any further inquiries, please don’t hesitate to
                                send a message and get in touch with us using our Contact Us page. Everything listed in
                                this page applies to Likes.io. By using our website, you agree to give us your consent
                                that allows the collection and storage of information detailed below. </p>
                                <div>
                                <p className={supportStyles.textTitle}>COOKIES</p>
                                <p>As one of the most common elements when browsing the World Wide Web, Likes.io utilizes
                                cookies in a way that most if not all websites generally do which is to store certain
                                content based on online activities and record them usually to make everything faster.
                                This is achieved using the browser of your choice, which transmits the data. Google,
                                arguably the most popular third-party vendor, uses cookies in order to properly direct
                                and advertise users to websites of interest, recommending Likes.io and various other
                                types of websites online. To find out more and acquire more information related to the
                                matter, please visit : https://www.google.com/policies/technologies/ads/ It is
                                ill-advised to disable the options for the cookies but it is possible to do so. This can
                                generally be done via the options or settings page of the browser. Be advised however
                                that tinkering with your browser’s settings haphazardly can have negative results. To
                                this end, please get in consult the respective developer first before making any
                                modifications. By disabling the cookies, Likes.io’s website may not run as it was
                                    intended to do so.</p>
                                </div>
                            <div>
                                <p className={supportStyles.textTitle}>LOGS</p>
                                <p>Not unlike cookies, logs or log files are typically utilized by many websites online.
                                Information pertaining to the Internet Protocol or simply IP address as it is more
                                commonly referred to as contained within the logs, and this allows your Internet Service
                                Provider or ISP to better track your internet activities. The data usually isn’t linked
                                to any personally identifiable information and exists primarily to analyze trends that
                                    can make browsing much more efficient.</p>
                            </div>
                            <div>
                                <p className={supportStyles.textTitle}>HOW COLLECTED AND STORED INFORMATION IS UTILIZED</p>
                                <p>Any and all data acquired by your visit of a website is meant to make the process of
                                browsing easier and faster. This is done by analyzing the trends in preferences and
                                habits that then direct you to websites of interest, including but not necessarily
                                limited to our services as well as associated entities. This not only helps our own
                                business grow and develop but also allows success to find other businesses as well. Data
                                collected and stored by usually goes into helping us give you more information on any of
                                our products and services as well as those of affiliated companies. This also helps us
                                make improvements to our website that we would not have been able to notice otherwise.
                                Everything listed on this page may not necessarily apply to other links and websites,
                                and by going to the aforementioned websites you are agreeing to their own policies and
                                terms of use. Please take note that any data or information may not always be secure,
                                and we at Likes.io hold no responsibility over any losses or damages that could
                                    potentially stem from their corruption as well as interception by unknown parties.</p>
                            </div>
                            <div>
                                <p className={supportStyles.textTitle}>CHANGES OR DELETION IN USER INFORMATION</p>
                                <p>For existing customer who either want to make changes to their respective accounts or no
                                longer wish to be a part of Likes.io, please send us a message through our Contact Us
                                page and we will get it done for you However, take note that any significant changes can
                                    drastically affect any services that you may currently have with us.</p>
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

export default PrivacyPolicy;
