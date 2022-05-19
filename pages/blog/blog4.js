import React from 'react';
import styles from "../../styles/Home.module.sass";
import {PageTitle} from "../../component/PageTitle/PageTitle";
import blogStyles from "../../styles/Blog.module.sass";
import PublishHead from "../../component/PublishHead";
import {Layer} from "../../component/Layer/Layer";
import blogInfoStyles from "../../styles/BlogItemInfo.module.sass";
import BlogInfoListItem from "../../component/BlogInfoListItem";

const Blog4 = () => {
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
                            <img src="/blogInfoHead4.png" />
                            <p>Wondering who the biggest Instagram influencers are going into 2022? We’ve made a ranking
                                of the biggest Instagram non-celebrity accounts, in terms of the number of followers.
                                We’ve decided to limit this ranking to “real” influencers, meaning we didn’t count
                                celebrities (actors, singers, or reality TV stars for example) or other public figures
                                (politicians, famous sportsmen, and other famous personalities who wouldn’t have needed
                                social media to achieve their fame).
                                Furthermore, we’re also not including famous brands, such as luxury brands like Chanel
                                for example, or travel brands such as NatGeo, and renowned football clubs that are part
                                of the overall top Instagram accounts. In short, we wanted to see who the influencers
                                with the biggest followings on Instagram are; influencers whose main activity is in
                                social media and who created their digital communities online, and that brands can
                                collaborate with.
                                To find stats and figures (number of followers and how they evolve) that are regularly
                                updated, as well as those for celebrity influencers, don’t hesitate to subscribe to
                                Influence4You’s influencer discovery platform. You will be able to filter your searches
                                with relevant criteria and verticals such as cooking, lifestyle, sports, and travel, for
                                example. This will allow you to optimize your Instagram marketing campaigns and reach
                                your objectives, whatever they may be– brand awareness, lead acquisition, sales,
                                traffic, etc.
                                Without further ado, here’s our ranking of the top 10 Instagram influencers!</p>
                        </div>
                        <div className={blogInfoStyles.blogList}>
                            <BlogInfoListItem img="/blogInfoListPhoto1.png" title="1. WHINDERSSONNUNES"
                                              text={<p>52.7M followers<br/><br/>
                                                  Whindersson Nunes is a Brazilian comedian and started as a YouTuber
                                                  with comedy videos in 2013. His
                                                  channel became the most subscribed to in Brazil 3 years later. Now
                                                  52.7M followers strong, he
                                                  currently ranks as the 64th most popular Instagram account overall
                                                  amongst famous actors, singers,
                                                  other celebrities and brands, and first in our ranking. His YouTube
                                                  channel is also in the top
                                                  rankings of the most popular YouTube channels ever.</p>}/>
                            <BlogInfoListItem img="/blogInfoListPhoto2.png" title="2. HUDABEAUTY"
                                              text={<p>46.8M followers<br/><br/>
                                                  Second on our list and at 73rd position in Instagram rankings is a
                                                  makeup artist and blogger, Huda Kattan. A real entrepreneur, she is
                                                  now also head of beauty empire Huda Beauty as she used her success to
                                                  launch her own cosmetics range. She’s also got 2M+ followers on her
                                                  more personal channel Huda and nearly 7M on hudabeautyshop. She often
                                                  features other, smaller beauty influencers to showcase their talent
                                                  and boost her own page too.</p>}/>
                            <BlogInfoListItem img="/blogInfoListPhoto3.png" title="3. LELE PONS"
                                              text={<p>44M followers<br/><br/>
                                                  Eleanora Pons, or Lele Pons, is a Venezuelan-American celebrity who
                                                  started her career on social media. An influencer, actress, singer and
                                                  model, she became famous on now-defunct Vine before it shut down in
                                                  2016, becoming the first “Viner” to reach one billion loops. She then
                                                  focused on creating comedy content for YouTube, where she has amassed
                                                  over 17M subscribers. She is a brand ambassador for Tarte Cosmetics
                                                  and collaborates with many brands, and has also branched out into
                                                  singing and modeling.</p>}/>
                            <BlogInfoListItem img="/blogInfoListPhoto4.png" title="4. NUSR_ET"
                                              text={<p>35.6M followers<br/><br/>
                                                  This chef has gone viral with #saltbea. Nusret is by far the most
                                                  popular cooking influencer. Unless you’ve been living in a cave,
                                                  there’s no way you’ll have missed his famous hand gestures for adding
                                                  salt to food!</p>}/>
                            <BlogInfoListItem img="/blogInfoListPhoto5.png" title="5. DAN BILZERIAN"
                                              text={<p>32.4M followers<br/><br/>
                                                  Dan Bilzerian is an entrepreneur and poker enthusiast known for
                                                  sharing his extravagant experiences. Yachts, parties, jets, friends…
                                                  His lifestyle, both alluring and controversial, has made him very
                                                  popular on social media.</p>}/>
                            <BlogInfoListItem img="/blogInfoListPhoto6.png" title="6. AMANDA CERNY"
                                              text={<p>24.8M followers<br/><br/>
                                                  American vlogger Amanda Cerny makes funny videos on YouTube. Her peppy
                                                  personality earned her huge amount of followers on many social media
                                                  channels. She’s also an actress and even a UN ambassador.</p>}/>
                        </div>

                    </div>
                </Layer>
            </div>
        </div>
    );
};

export default Blog4;
