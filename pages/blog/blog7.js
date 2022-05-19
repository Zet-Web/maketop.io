import React from 'react';
import styles from "../../styles/Home.module.sass";
import {Layer} from "../../component/Layer/Layer";
import {PageTitle} from "../../component/PageTitle/PageTitle";
import blogStyles from "../../styles/Blog.module.sass";
import PublishHead from "../../component/PublishHead";
import blogInfoStyles from "../../styles/BlogItemInfo.module.sass";
import BlogInfoListVideo from "../../component/BlogInfoListVideo";

const Blog7 = () => {
    return (
        <div style={{maxWidth: 1920, width: "100%", margin: "0 auto", overflowX: "hidden"}}>
            <div className={styles.container}>
                <div className={styles.background}/>
                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={'Blog'}/>
                        <p className={blogStyles.title}>Who Are the Richest Stars on TikTok?</p>
                        <PublishHead/>
                        <div className={blogStyles.blogInfo_photo}>
                            <div className={blogStyles.blogInfo_photo_date}>
                                7th Feb 2022
                            </div>
                            <img src="/blogInfoHead7.png"/>
                            <p>Anyone else wish they’d spent the beginning of quarantine trying to become TikTok famous
                                instead of, like, woefully staring at a sourdough starter and googling “how to not kill
                                indoor plants”?? Same, because now everyone is rich with money while the rest of us are
                                rich with yeast and potting soil.
                                Of course, there’s $ and then there’s $$$. Some TikTok stars have gotten so hugely
                                popular that they became millionaires in legit one year—thanks to both endorsements on
                                TikTok itself and leveraging their massive success on the app into, ya know, starring
                                roles in Netflix movies and friendships with Kardashians. On that note, here’s a look at
                                the highest-paid stars on TikTok.
                                Psst: Not alllll of 2021’s data is available yet, so these numbers are based on both
                                Forbes’ list of the highest-earning TikTok stars in 2020 and everyone’s current net
                                worth according to Celebrity Net Worth.

                            </p>
                        </div>
                        <div className={blogInfoStyles.blogVideoList}  >
                            <BlogInfoListVideo item={<iframe width="100%" height="315"
                                                             src="https://www.youtube.com/embed/p-1lZpaoKdk"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="ADDISON RAE"
                                               text={<p>$5 Million in 2020<br/><br/>
                                                   Current Net Worth: $8 Million<br/><br/>
                                                   Forbes’ list of TikTok’s richest (not its official name, but it
                                                   should be) in 2020 reported that Addison was officially TikTok’s
                                                   top-earning star—bringing in $5 million in just a year, and her
                                                   current net worth estimate on Celebrity Net Worth is even higher, all
                                                   the way up to $8 million by late 2021:<br/><br/>
                                                   This content is imported from TikTok. You may be able to find the
                                                   same content in another format, or you may be able to find more
                                                   information, at their web site.</p>} reverse={false}/>
                            <BlogInfoListVideo item={<iframe width="100%" height="315"
                                                             src="https://www.youtube.com/embed/Vq6DJgw7dYE"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="CHARLIE D’AMELIO"
                                               text={<p> $4 Million in 2020<br/><br/>
                                                   Sixteen-year-old Charli earned $4 million, according to Forbes’ 2020
                                                   breakdown—but her overall net worth has since skyrocketed to a figure
                                                   closer to $12 million (!!!!!!!!!).<br/><br/>
                                                   ADVERTISEMENT - CONTINUE READING BELOW<br/>
                                                   This content is imported from TikTok. You may be able to find the
                                                   same content in another format, or you may be able to find more
                                                   information, at their web site.<br/><br/>
                                                   @charlidamelio<br/>
                                                   my @puravidabracelets pack is here💛 order yours at the link in my
                                                   bio! #charlixpuravidabracelets #pvpartner
                                               </p>} reverse={true}/>
                            <BlogInfoListVideo item={<iframe width="100%" height="315"
                                                             src="https://www.youtube.com/embed/wKOptbo-QFw"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="DIXIE D’AMELIO"
                                               text={<p> $2.9 Million in 2020<br/><br/>
                                                   Current Net Worth: $6 Million<br/><br/>
                                                   Dixie didn’t make quite as much money as her sister last year (“just”
                                                   $2.9 million, according to Forbes), but her profile is only getting
                                                   bigger. As of late 2021, Celebrity Net Worth estimates she’s banked
                                                   an impressive $6 million.<br/><br/>
                                                   This content is imported from TikTok. You may be able to find the
                                                   same content in another format, or you may be able to find more
                                                   information, at their web site.<br/>
                                                   @dixiedamelio
                                                   @charlidamelio
                                               </p>} reverse={false}/>
                            <BlogInfoListVideo item={<iframe width="100%" height="315"
                                                             src="https://www.youtube.com/embed/XqBKrJnA8ZY"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="LOREN GRAY: $2.4 MILLION IN 2020"
                                               text={<p> Current Net Worth: $5 Million<br/><br/>
                                                   Forbes says Loren Gray made a casual $2.4 million thanks to her
                                                   popularity on TikTok, and—in addition to the usual endorsement deals
                                                   and sponcon—she’s turned her online success into a full-blown music
                                                   career:<br/><br/>
                                                   This content is imported from YouTube. You may be able to find the
                                                   same content in another format, or you may be able to find more
                                                   information, at their web site.<br/><br/>
                                                   Back in December, Loren added to her net worth by launching a jewelry
                                                   line called &always, which is, honestly, full of cute stuff
                                               </p>} reverse={true}/>
                            <BlogInfoListVideo item={<iframe width="100%" height="315"
                                                             src="https://www.youtube.com/embed/zIUSMI1Y-7o"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="JOSH RICHARDS: $1.5 MILLION in 2020"
                                               text={<p> Current Net Worth: TBD!<br/>
                                                   Josh “Never Not Making Headlines” Richards is worth $1.5 million,
                                                   according to Forbes—and not just ’cause of sponcon with major brands.
                                                   Josh also takes home major cash in YouTube ads and gets income from
                                                   his merch line. Plus, let’s not forget that he has his own energy
                                                   drink company with Bryce Hall, which he spends a lotta time
                                                   promoting:<br/>
                                                   This content is imported from TikTok. You may be able to find the
                                                   same content in another format, or you may be able to find more
                                                   information, at their web site.<br/><br/>
                                                   @joshrichards<br/>
                                                   Code expires midnight tomorrow! Tap lînk in Bîo !!<br/>
                                                   @ani.energyofficial
                                               </p>} reverse={false}/>
                            <BlogInfoListVideo item={<iframe width="100%" height="315"
                                                             src="https://www.youtube.com/embed/uaqjCxY8zgY"
                                                             title="YouTube video player" frameBorder="0"
                                                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                             allowFullScreen></iframe>}
                                               title="MICHAEL LE: $1.2 MILLION IN 2020"
                                               text={<p> Current Net Worth: TBD!<br/><br/>
                                                   Michael has been wildly popular since TikTok’s Musical.ly days—and is
                                                   one of the founders of Shluv House. He creates huge amounts of
                                                   content, not just on TikTok but also on YouTube, where he and his
                                                   cute little brother film together. All that hard work has paid off,
                                                   with Forbes saying Michael’s made $1.2 million in just one year.
                                                   This content is imported from TikTok. You may be able to find the
                                                   same content in another format, or you may be able to find more
                                                   information, at their web site.<br/><br/>
                                                   @justmaiko
                                                   introducing the polite twerk😂🤣 @bangenergy @bangenergy.ceo
                                                   #bangenergy
                                               </p>} reverse={true}/>
                        </div>

                    </div>
                </Layer>
            </div>
        </div>
    );
};

export default Blog7;
