import React from 'react';
import styles from "../../styles/Home.module.sass";
import {Layer} from "../../component/Layer/Layer";
import {PageTitle} from "../../component/PageTitle/PageTitle";
import blogStyles from "../../styles/Blog.module.sass";
import blogInfoStyles from "../../styles/BlogItemInfo.module.sass";
import PublishHead from "../../component/PublishHead";

const Blog3 = () => {
    return (
        <div style={{maxWidth: 1920, width: "100%", margin: "0 auto", overflowX: "hidden"}}>
            <div className={styles.container}>
                <div className={styles.background}/>
                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={'Blog'}/>
                        <p className={blogStyles.title}>How To Become Instagram Famous In 3 Easy Steps</p>
                        <PublishHead/>
                        <div className={blogStyles.blogInfo_photo}>
                            <div className={blogStyles.blogInfo_photo_date}>
                                7th Feb 2022
                            </div>
                            <img src="/blogInfoHead3.png"/>
                            <p>Are you wondering how to become Instagram famous? If you want more followers on
                                Instagram, you need to build a stunning Instagram feed. You need to focus on ways to get
                                your photos noticed. And you need to engage with other Instagramers. In this tutorial
                                you’ll discover how to get Instagram famous in three easy steps.</p>
                        </div>
                        <div className={blogInfoStyles.blogInfo_container}>

                            <div><img src="/blogInfoPhoto3.1.png" alt="" style={{float: 'left', marginRight: 80}}/>
                                <p className={blogInfoStyles.blockTitle}>How To Become Instagram Famous:
                                    Introduction</p>
                                When I first signed up to Instagram, I struggled to get my first 30 followers. Even my
                                best photos were getting only a few likes. And I wasn’t getting any feedback on my
                                pictures.
                                That’s when I realized I needed to learn how to get popular on Instagram. And now I have
                                over 128,000 followers.
                                From personal experience, I can tell you that Instagram gets a lot more fun when more
                                people are following you!
                                Read on to find out how to get famous on Instagram… and gain more genuine followers who
                                really appreciate your photography.

                            </div>
                        </div>

                        <div className={blogInfoStyles.blogInfo_container}>

                            <div>
                                <img src="/blogInfoPhoto3.2.png" alt="" style={{float: 'right', marginLeft: 80}}/>
                                <p>Step 1: Build A Stunning Instagram Feed</p>
                                Knowing how to become famous on Instagram involves several key factors. But the most
                                important is to make your Instagram profile look great. Nobody is going to follow a
                                profile that has poor quality images.
                                If your goal is to showcase your photography, your photos must look amazing. It’s better
                                to post nothing than to post a bad photo.
                                The first thing to do is upload about 15 – 20 of your best images. If you don’t have
                                that many, keep working on it. Make sure you only post high quality eye-catching photos.

                            </div>
                        </div>
                        <div className={blogInfoStyles.textBlock} style={{marginTop: 50}}>

                            <div className={blogInfoStyles.textBlock_text}>
                                If you’re starting out on Instagram, it’s a good idea to improve your iPhone photography
                                first. People only like to follow photographers with interesting photos.
                                To improve your photography, work on creating images with excellent composition. And
                                learn how to use light to create more stunning and dramatic photos.
                                Learn how to use your camera’s settings. You might also consider using a more advanced
                                iPhone camera app. Edit your Instagram photos with a photo editor app to ensure they
                                look their best before sharing.
                                Taking time to improve your photography will more than pay off when you try to get
                                Instagram famous.
                                Keep in mind that certain types of photos do particularly well on Instagram. In my
                                experience beach photos, reflections, silhouettes and sunsets get the most likes.
                                Portrait photos are generally not as popular.
                                This sunset reflection photo got more likes than a lot of my other photos that I’ve
                                posted on Instagram.
                            </div>

                        </div>
                        <div className={blogInfoStyles.blogInfo_container}>
                            <div>
                                <img src="/blogInfoPhoto3.3.png" alt="" style={{float: 'right', marginLeft: 80}}/>
                                <p>Use videos or podcasts to explain something at length.</p>
                                Before you go to the next step, make sure your Instagram account is public. If your
                                photos aren’t public, you’ll have a much harder time attracting new followers.
                                To make your Instagram feed public, go to your profile and tap the Settings icon near
                                the top right of the screen. Go to Account Privacy and make sure the Private Account
                                slider is off.
                                Finally, write a profile description that will motivate people to follow you. Describe
                                yourself in a meaningful way to attract the right kind of followers. Don’t
                                overcomplicate this step. Something like “iPhone landscape photographer and surfer” is
                                all you need.

                            </div>
                        </div>
                        <div className={blogInfoStyles.textBlock} style={{marginTop: 50}}>
                            <p className={blogInfoStyles.textBlock_title}>Step 2: Get Your Instagram Photos Noticed</p>
                            <div className={blogInfoStyles.textBlock_text}>
                                Once you’ve uploaded some great photos, it’s time to attract everyone’s attention. Your
                                aim is to get more Instagram followers, as well as more likes and comments on your
                                photos.
                                In this section, you’ll learn how to get noticed on Instagram. There are several ways to
                                get your photos noticed and gain more followers.
                                First, reach out to your existing friends and followers from other social networks.
                                Since those people already know you, they’re more likely to become a follower. You can
                                send a message or share a post inviting your friends to follow you.
                                To get your Instagram photos in front of more people, consider using hashtags. Adding
                                hashtags when you post a photo means your image will show up in Instagram’s hashtag
                                feeds.
                            </div>

                        </div>
                    </div>
                </Layer>
            </div>
        </div>
    );
};

export default Blog3;
