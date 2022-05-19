import React, {useState} from 'react';
import styles from "../styles/Home.module.sass";
import blogStyles from "../styles/Blog.module.sass";
import {Layer} from "../component/Layer/Layer";
import {PageTitle} from "../component/PageTitle/PageTitle";
import BlogItem from "../component/BlogItem";
import PageItem from "../component/PageItem";
import { Replay } from '@material-ui/icons';
import Head from 'next/head'
import {useRouter} from "next/router";

const Blog = () => {
    const router=useRouter()
    const [currentPage,setCurrentPage]=useState(1)

    const pages =[]
    for (let i = 1; i < 6; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.background}>
        <div style={{maxWidth: 1920, width: "100%", margin: "0 auto", overflowX: "hidden"}}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="facebook-domain-verification" content="qyk8si5jqwk9m6240785cypx4jcij9" />
                <meta name="google-site-verification" content="oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE"/>
                <title>MakeTop | Blog</title>
                <meta name="description" content="MakeTop Blog. There is a lot of useful information, hacks and tips about using social networks"/>
                <meta name="og:description" content="MakeTop Blog. There is a lot of useful information, hacks and tips about using social networks"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="MakeTop | Blog "/>
                <meta property=" title" content="Blog #1 About Your Social Media - MakeTop"/>
                <meta name="twitter:description" content="You'll find tips on Instagram growth and general social media advice as well as latest updates related to our services."/>
                <meta name="twitter:title" content="MakeTop - Blog"/>
                <meta name="twitter:site" content="@StormlikesN"/>
                <meta property="og:site_name" content="MakeTop"/>
                <meta property="og:url" content="https://maketop.io/blog"/>
                <link rel="canonical" href="https://maketop.io/blog"/>
            </Head>
            <div className={styles.container}>

                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={'Blog'}/>
                        <p className={blogStyles.title}>Blog</p>
                        <div className={blogStyles.blogItems}>
                             <BlogItem onClick={()=>router.push(`/blog/blog1`,"/blog/why-your-business-account-on-instagram-needs-a-professional-bio")} text="Why Your Business Account On
                                Instagram Needs A Professional Bio" img="/blogInfoHead.png"/>
                             <BlogItem onClick={()=>router.push(`/blog/blog2`,"/blog/how-to-become-popular-on-social-media")} text="How to Become Popular on Social Media"  img="/blogMainPhoto2.jpg"/>
                             <BlogItem onClick={()=>router.push(`/blog/blog3`,"/blog/how-to-become-instagram-famous-in-3-easy-steps")} text="How To Become Instagram Famous In 3 Easy Steps"  img="/blogMainPhoto3.jpg"/>
                             <BlogItem onClick={()=>router.push(`${router.pathname}/blog4`,"/blog/the-most-popular-influencers-on-instagram-2022")} text="The Most Popular Influencers on Instagram 2022" img="/blogInfoHead4.png"/>
                             <BlogItem onClick={()=>router.push(`/blog/blog5`,"/blog/20-of-instagram’s-highest-paid-stars-in-2022")} text="20 of Instagram’s Highest Paid Stars in 2022" img="/blogInfoHead5.png"/>
                             <BlogItem onClick={()=>router.push(`/blog/blog6`,"/blog/20-of-the-most-viewed-youTube-videos-of-all-time-[updated daily]")} text="20 of the Most Viewed YouTube Videos of all Time [Updated Daily]" img="/blogInfoHead6.png"/>
                             <BlogItem onClick={()=>router.push(`/blog/blog7`,"/blog/who-are-the-richest-stars-on-tikTok?")} text="Who Are the Richest Stars on TikTok?" img="/blogMainPhoto7.jpg"/>


                        </div>
                        <div className={blogStyles.loadMore}>
                            <Replay style={{color:'#3749FF'}}/>
                            <p>Load More</p>
                        </div>
                        <div className={blogStyles.pageButtons}>
                            {
                                pages.map((page,index)=>{
                                    return <PageItem key={index} page={page} active={currentPage===page} onClick={() => setCurrentPage(page)}/>
                                    }
                                )
                            }
                            <PageItem page=">" active={true} onClick={() => setCurrentPage(currentPage===pages.length?1:currentPage+1)}/>

                        </div>

                    {/*<PaymentError/>*/}
                    {/*    <ThanksForShot/>*/}
                    </div>
                </Layer>
            </div>
        </div>
        </div>
    );
};

export default Blog;
