import React from 'react';
import styles from "../../styles/Home.module.sass";
import {Layer} from "../../component/Layer/Layer";
import {PageTitle} from "../../component/PageTitle/PageTitle";
import blogStyles from "../../styles/Blog.module.sass";
import blogInfoStyles from "../../styles/BlogItemInfo.module.sass";
import PublishHead from "../../component/PublishHead";

const Blog2 = () => {
    return (
        <div className={styles.background}>
        <div style={{maxWidth: 1920, width: "100%", margin: "0 auto", overflowX: "hidden"}}>
            <div className={styles.container}>
                <div className={styles.background}/>
                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={'Blog'}/>
                        <p className={blogStyles.title}>How to Become Popular on Social Media</p>
                        <PublishHead/>
                        <div className={blogStyles.blogInfo_photo}>
                            <div className={blogStyles.blogInfo_photo_date}>
                                7th Feb 2022
                            </div>
                            <img src="/blogInfoHead2.png"/>
                            <p>Choose one platform to focus your attention on. You can definitely use multiple social
                                media platforms, but choose one to start with. Trying to master too many platforms at
                                once will weaken your social media presence, which isn't what you want. Go ahead and
                                reserve your username on multiple platforms, but wait to start developing them until
                                you've spent time becoming proficient in your first choice. Once you feel you can easily
                                handle the platform and are regularly posting new content, incorporate an additional
                                platform.</p>
                        </div>
                        <div className={blogInfoStyles.blogInfo_container}>

                            <div><img src="/blogInfoPhoto2.1.png" alt="" style={{float: 'left', marginRight: 80}}/>
                                <p className={blogInfoStyles.blockTitle}>Use Instagram or a blog to focus on lifestyle
                                    and image-centered information</p>
                                Writing, cooking, beauty, and fitness interests do well on these platforms because
                                they're primarily image- and information-based. Instagram is great for fast-paced
                                content creation, whereas a blog will allow you to dive a little more deeply into
                                different topics.
                                Instagram can also be a great tool to use to connect with other creators like yourself
                                very quickly. It's easy to use hashtags to search for relatable content, and people
                                check their accounts often, which means you will have more foot traffic than you might
                                initially get on a blog.

                            </div>
                        </div>

                        <div className={blogInfoStyles.blogInfo_container}>

                            <div>
                                <img src="/blogInfoPhoto2.2.png" alt="" style={{float: 'right', marginLeft: 80}}/>
                                <p>Why are Instagram likes valuable?</p>
                                Alongside comments, likes are the principal currency spent on
                                Instagram. A like is an affirmation to the social media community that your post is
                                useful,
                                interesting or fun, and might be enjoyed by someone else too.
                                Not only do likes indicate the quality of your post and brand in general, they also show
                                that many people think your account is worth following. The more likes your account
                                receives, the better the ‘social proof’ of your popularity and quality. More likes also
                                mean
                                more exposure. Instagram uses an algorithm to choose which posts to show to larger
                                audiences
                                and having a more popular post will encourage Instagram to organically boost your brand.
                                Likes are also a way to encourage interaction. When someone likes a post, it’s common
                                for
                                the owner of the account to check out the profile of whoever gave the like, and it’s the
                                perfect opportunity to gain a new follower.
                                With Likes.io, we target specific accounts to ensure that your account only likes posts
                                that
                                connect directly to your desired market and demographic.

                            </div>
                        </div>
                        <div className={blogInfoStyles.textBlock} style={{marginTop: 50}}>
                            <p className={blogInfoStyles.textBlock_title}>Pick Facebook to promote your presence to a
                                lot of people.</p>
                            <div className={blogInfoStyles.textBlock_text}>
                                In addition to sharing content with all the people you're friends with, you can also
                                promote posts (for a fee) and reach people who aren't on your friends list. It's also a
                                great platform to connect with businesses in your community, as most companies have
                                Facebook pages.
                                Facebook also provides a lot of helpful statistics about your posts and content, showing
                                you how many people click on your posts and engage with them, what times of the day are
                                busiest, and what demographic is interested in your content.
                            </div>
                            <img src="/blogInfoPhoto2.3.png"/>
                        </div>
                        <div className={blogInfoStyles.blogInfo_container}>

                            <div>
                                <img src="/blogInfoPhoto2.4.png" alt="" style={{float: 'right', marginLeft: 80}}/>
                                <p>Use videos or podcasts to explain something at length.</p>
                                If you're an expert in baking, history, politics, exercise, or tutorials of some sort,
                                creating a YouTube channel, blog, or podcast on SoundCloud or iTunes would be a great
                                way to start sharing your information. This gives you a little more space to go into
                                detail and could be a great resource for followers to learn something new.
                                This is a great way to start exposing yourself to more followers. A lot of people would
                                rather watch (or listen) than read something, so creating a dynamic video or podcast is
                                a cool way to show your personality and reach more people.

                            </div>
                        </div>
                        <div className={blogInfoStyles.textBlock} style={{marginTop: 50}}>
                            <p className={blogInfoStyles.textBlock_title}>Learn how to cross-post your content if you
                                use several mediums.</p>
                            <div className={blogInfoStyles.textBlock_text}>
                                While you could create new material for each platform, you could also link your accounts
                                so that they're always updated with the same new material (or at least a link to the new
                                material). For example, if you primarily blog and use Instagram, you'll probably post a
                                lot more photos to Instagram than new entries on your blog, which is totally fine. But
                                when you do post a new blog, make an announcement on your Instagram post so your
                                followers know there is new material!
                                As you're starting out, try to keep things simple—learn to master a platform and post
                                good content, and once you're doing these things, you'll have a good base on which you
                                can build your brand.
                            </div>
                            <img src="/blogInfoPhoto2.5.png"/>
                        </div>
                    </div>
                </Layer>
            </div>
        </div>
        </div>
    );
};

export default Blog2;
