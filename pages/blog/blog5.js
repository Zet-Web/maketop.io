import React from 'react';
import styles from "../../styles/Home.module.sass";
import {Layer} from "../../component/Layer/Layer";
import {PageTitle} from "../../component/PageTitle/PageTitle";
import blogStyles from "../../styles/Blog.module.sass";
import PublishHead from "../../component/PublishHead";
import blogInfoStyles from "../../styles/BlogItemInfo.module.sass";
import BlogInfoListItem from "../../component/BlogInfoListItem";

const Blog5 = () => {
    return (
        <div style={{maxWidth: 1920, width: "100%", margin: "0 auto", overflowX: "hidden"}}>
            <div className={styles.container}>
                <div className={styles.background}/>
                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={'Blog'}/>
                        <p className={blogStyles.title}>20 of Instagram’s Highest Paid Stars in 2022</p>
                        <PublishHead/>
                        <div className={blogStyles.blogInfo_photo}>
                            <div className={blogStyles.blogInfo_photo_date}>
                                7th Feb 2022
                            </div>
                            <img src="/blogInfoHead5.png"/>
                            <p>Instagram is one of the most popular social media networks used by marketers to connect
                                with their audiences. It is also the most popular social network for most influencer
                                marketing platforms, with many influencers in different niches and more emerging each
                                day.
                                Almost all brands and marketers have, at some point, worked with an influencer or have
                                plans to. And, most prefer working with smaller influencers who are more authentic and
                                affordable.
                                However, if you have a large enough budget and want to reach millions of people via just
                                one post, then celebrities are your best bet. No one can beat the power and influence of
                                a celebrity or match their follower bases.
                                Here's a list of the top highest-earning celebrities and influencers on Instagram with
                                whom you can collaborate to reach millions of people.

                            </p>
                        </div>
                        <div className={blogInfoStyles.blogList}>
                            <BlogInfoListItem img="/blogInfoListPhoto7.png"  title="1. CRISTIANO RONALDO"
                                              text={<p>Estimated Average Price Per Post - $619,497 - $1M<br/><br/>
                                                  Christiano Ronaldo is one of the most popular football players in the
                                                  world and doesn’t really need an introduction. However, for all those
                                                  who don’t know about sports, he is a Portuguese football player, who
                                                  plays forward.
                                                  Ronaldo is the dream celebrity for brand endorsements for any sports
                                                  brand and he also does it well. Unlike other celebrities who often
                                                  just mention a brand and don’t even bother to write a caption, he
                                                  actually does a good job. </p>}/>
                            <BlogInfoListItem img="/blogInfoListPhoto8.png" title="2. DWAYNE JOHNSON"
                                              text={<p>Estimated Average Price Per Post - $504,790 - $841,317<br/><br/>
                                                  Dwayne, popularly known as, “The Rock,” is a Hollywood actor who first
                                                  gained popularity as a wrestler in the TV show called WWE. He is known
                                                  for his solid build and is mostly seen in action movies. And, that
                                                  makes him a perfect celebrity influencer for health and fitness
                                                  brands.
                                                  Here’s an example of him promoting a water brand on Instagram.</p>}/>
                            <BlogInfoListItem img="/blogInfoListPhoto9.png" title="3. ARIANA GRANDE"
                                              text={<p>Estimated Average Price Per Post - $500,077 - $833,461<br/><br/>
                                                  Ariana is an award-winning, American singer, actress, and songwriter
                                                  who has several hit singles. Her recent single, “Thank You, Next,” has
                                                  been on almost all prominent music billboards worldwide. This has made
                                                  her rise to the second position among the highest-earning
                                                  Instagrammers of 2019.
                                                  A simple mention from her on her Instagram feed can help you reach her
                                                  165 million followers.</p>}/>
                            <BlogInfoListItem img="/blogInfoListPhoto10.png" title="4. KYLIE JENNER"
                                              text={<p>Estimated Average Price Per Post - $491,789 - $819,648<br/><br/>
                                                  Kylie is the owner of the beauty brand, Kylie Cosmetics, and is one of
                                                  the most influential people in the beauty industry. She belongs to the
                                                  popular Jenner-Kardashian clan of “Keeping up with the Kardashians”
                                                  fame. The entire extended family rose to fame because of that show,
                                                  but each has their own set of accomplishments.</p>}/>
                            <BlogInfoListItem img="/blogInfoListPhoto11.png" title="5. SELENA GOMEZ"
                                              text={<p>Estimated Average Price Per Post - $483,972 - $806,620<br/><br/>
                                                  Selena Gomez is a Spanish singer and actress who has a massive fan
                                                  following worldwide. She has a huge follower base on Instagram and has
                                                  been among the most popular Instagrammers for years. She breaks the
                                                  norm that celebrities don’t get high engagement rates on their posts
                                                  and gets an average of 1.41% engagement rate on her Instagram posts.
                                                  She is often seen endorsing fashion, lifestyle, and beauty brands.
                                                  Here’s one example.</p>}/>
                            <BlogInfoListItem img="/blogInfoListPhoto12.png"  title="6. KIM KARDASHIAN"
                                              text={<p>Estimated Average Price Per Post - $469,076 - $781,793<br/><br/>
                                                  Kim Kardashian is another celebrity who rose to fame after being
                                                  featured in a TV series based on her family. She just launched her
                                                  cosmetics brand, KKW beauty, following after the footsteps of her
                                                  half-sister, Kylie Jenner.
                                                  Kim is very popular on social media and consistently has media
                                                  attention and gets both good and bad publicity. Here is a paid post
                                                  where Kim is seen promoting a wellness brand.</p>}/>
                        </div>

                    </div>
                </Layer>
            </div>
        </div>
    );
};

export default Blog5;
