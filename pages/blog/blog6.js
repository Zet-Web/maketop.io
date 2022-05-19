import React from 'react';
import styles from "../../styles/Home.module.sass";
import {Layer} from "../../component/Layer/Layer";
import {PageTitle} from "../../component/PageTitle/PageTitle";
import blogStyles from "../../styles/Blog.module.sass";
import PublishHead from "../../component/PublishHead";
import blogInfoStyles from "../../styles/BlogItemInfo.module.sass";
import BlogInfoListItem from "../../component/BlogInfoListItem";
import BlogInfoListVideo from "../../component/BlogInfoListVideo";

const Blog6 = () => {
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
                            <img src="/blogInfoHead6.png"/>
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
                        <div className={blogInfoStyles.blogVideoList} style={{gridTemplateColumns: "1fr"}}>
                            <BlogInfoListVideo item={<iframe width="100%" height="350"
                                                             src="https://www.youtube.com/embed/e-ORhEE9VVg"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="20. BLANK SPACE – Taylor Swift"
                                               text={<p>(2,950,642,445 views)<br/><br/>
                                                   Blank Space is Taylor Swift’s second entry on this list. It comes
                                                   from
                                                   her fifth studio album, “1989” (as does Shake it Off).<br/><br/>
                                                   The song was released in November 2014, and within three weeks it
                                                   topped the US Billboard Hot 100, knocking Shake it Off from that
                                                   position. Taylor Swift became the first woman in the chart’s history
                                                   to succeed herself at the top.<br/><br/>
                                                   Joseph Kahn was asked to direct the video. Taylor Swift liked the
                                                   idea
                                                   of portraying herself as a crazy villain in the video. It was partly
                                                   inspired by “A Clockwork Orange” and constant tabloid gossip about
                                                   Taylor Swift’s relationships.</p>} reverse={false}/>
                            <BlogInfoListVideo item={<iframe width="100%" height="350"
                                                             src="https://www.youtube.com/embed/YQHsXMglC9A"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="#19. HELLO – ADELE"
                                               text={<p> (2,961,843,043 views)<br/><br/>
                                                   English singer, Adele, released Hello in October 2015 as the lead
                                                   single from her third album, “25”.<br/><br/>
                                                   It was successful in many countries, reaching the top position across
                                                   the world, including in both the UK and USA.<br/><br/>
                                                   The music video, which stars Adele and Tristan Wilds, was directed by
                                                   Xavier Dolan. It broke the record for the shortest time to reach 1
                                                   billion views on YouTube – 88 days. It currently has over 12 million
                                                   likes, making it the fifth most liked video on YouTube.
                                               </p>} reverse={true}/>
                            <BlogInfoListVideo item={<iframe width="100%" height="315"
                                                             src="https://www.youtube.com/embed/RBumgq5yVrA"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="#18. LET HER GO – PASSENGER"
                                               text={<p> (3,199,839,565 views)<br/><br/>
                                                   Let Her Go was written and recorded by English singer-songwriter
                                                   Passenger (Mike Rosenberg). Let Her Go was released in July 2012 as
                                                   the second single from Passenger's fourth album, “All the Little
                                                   Lights.”<br/><br/>
                                                   The song topped the charts in many countries and has sold over one
                                                   million digital copies in the UK, and over four million in the US.
                                                   The song became a hit in the Netherlands after Dave, a Dutch fan,
                                                   e-mailed Passenger expressing his wish to introduce the song to some
                                                   Dutch radio stations, claiming it could be a hit there. The song
                                                   trended and became a massive success with the Dutch people.
                                               </p>} reverse={false}/>
                            <BlogInfoListVideo item={<iframe width="100%" height="315"
                                                             src="https://www.youtube.com/embed/b8I-7Wk_Vbc"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="#17. Bailando – Enrique Iglesias ft. Descemer Bueno and Gente De Zona"
                                               text={<p> (3,183,438,650 views)<br/><br/>
                                                   Bailando is another music video that highlights the international
                                                   appeal of YouTube.<br/><br/>
                                                   Spanish singer, Enrique Iglesias, recorded Bailando for his tenth
                                                   studio album, “Sex and Love” in 2014.<br/><br/>
                                                   He recorded several versions of the song. The original Spanish
                                                   version also included vocals by Cubans, Descemer Bueno, and Gente de
                                                   Zona. A Spanglish version features vocals by Jamaican singer Sean
                                                   Paul. Enrique Iglesias also recorded two versions in Portuguese (with
                                                   different people doing the additional vocals) for different markets.
                                               </p>} reverse={true}/>
                            <BlogInfoListVideo item={<iframe width="100%" height="315"
                                                             src="https://www.youtube.com/embed/YqeW9_5kURI"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="#16. LEAN ON – MAJOR LAZER AND DJ SNAKE FT. MO"
                                               text={<p> 3,182,864,018 views)<br/><br/>
                                                   Lean On comes from Major Lazer’s third album. “Peace is the Mission.”
                                                   It is a house ballad.<br/><br/>
                                                   In became the most streamed song of all time on Spotify in November
                                                   2015, although Drake’s One Dance overtook it the following year.
                                                   The music video for Lean On was directed by Tim Erem and filmed in
                                                   India. It shows a sequence of Major Lazer, MØ and DJ Snake performing
                                                   dance sequences.
                                               </p>} reverse={false}/>
                            <BlogInfoListVideo item={<iframe width="100%" height="315"
                                                             src="https://www.youtube.com/embed/nfWlot6h_JM"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="#15. SHAKE IT OFF – TAYLOR SWIFT"
                                               text={<p> (3,156,245,420 views)<br/><br/>
                                                   Taylor Swift recorded Shake it Off as the lead single for her fifth
                                                   album, “1989”. The song premiered on a Yahoo! Live stream on August
                                                   18, 2014. The studio released the video on YouTube and made the song
                                                   available for digital download on the same day.<br/><br/>
                                                   Shake it Off is Taylor Swift’s most successful Billboard Hot 100 song
                                                   to date. It stayed in the chart for 50 consecutive weeks.
                                                   Mark Romanek directed the video, and it features dances choreographed
                                                   by Tyce Diorio. It incorporates dancing in the styles of hip-hop,
                                                   lyrical, ballet, jazz, and cheerleader – even “twerking.”
                                               </p>} reverse={true}/>
                        </div>

                    </div>
                </Layer>
            </div>
        </div>
    );
};

export default Blog6;
