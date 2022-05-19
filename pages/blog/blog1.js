import React from 'react';
import styles from "../../styles/Home.module.sass";
import {Layer} from "../../component/Layer/Layer";
import {PageTitle} from "../../component/PageTitle/PageTitle";
import blogStyles from "../../styles/Blog.module.sass";
import blogInfoStyles from "../../styles/BlogItemInfo.module.sass";
import PublishHead from "../../component/PublishHead";

const Blog1 = () => {
    return (
        <div style={{maxWidth: 1920, width: "100%", margin: "0 auto", overflowX: "hidden"}}>
            <div className={styles.container}>
                <div className={styles.background}/>
                <Layer type="link">
                    <div className={`container`}>
                        <PageTitle title={'Blog'}/>
                        <p className={blogStyles.title}>Why Your Business Account On<br/>
                            Instagram Needs A Professional Bio</p>
                        <PublishHead/>
                        <div className={blogStyles.blogInfo_photo}>
                            <div className={blogStyles.blogInfo_photo_date}>
                                7th Feb 2022
                            </div>
                            <img src="/blogInfoHead.png"/>
                            <p>Gone are the days when people clicked pictures using a digital camera and preserved them
                                in physical photo albums. In a world driven by social media, clicking and sharing images
                                has never been easier. The social media platform of Instagram is particularly booming
                                currently with more than 500 million daily users. Using features such as Instagram
                                stories, posts, reels, IGTV, etc., users can share their special moments with all their
                                family and friends in seconds.
                                Although sharing images as Instagram posts is convenient, you might still miss the
                                process of curating photographs of a particular event in a photo album. If you do feel
                                so, do not worry! Instagram stories can help you with that too!</p>
                        </div>
                        <div className={blogInfoStyles.blogInfo_container}>

                            <div><img src="/blogInfoPhoto2.png" alt="" style={{float: 'left', marginRight: 80}}/>
                                <p className={blogInfoStyles.blockTitle}>Why are Instagram likes valuable?</p>
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
                        <div className={blogInfoStyles.textBlock}>
                            <p className={blogInfoStyles.textBlock_title}>Why should you use Instagram stories?</p>
                            <div className={blogInfoStyles.textBlock_text}>
                                The reasons why you should use Instagram stories to create an Instagram photo collage
                                are many. Some of them are:
                                <ol>
                                    <li>It allows you to post unlimited photos and videos and organise them as
                                        highlights. These
                                        highlights appear on your profile with the relevant title. For instance, you may
                                        categorise all your wedding pics under the highlight titled “My Wedding.”
                                    </li>
                                    <li>Numerous features are available on Instagram stories that can make your stories
                                        more
                                        informative and engaging. You can use various filters, add text to describe a
                                        certain
                                        image, add location, use hashtags, tag people present in the image, and so on.
                                    </li>
                                    <li>You might also want to share your images and videos with only a certain group of
                                        people
                                        rather than all your followers. For such occasions, Instagram allows you to post
                                        stories
                                        in the close friends’ section. Only people who are added in the close friends
                                        can view
                                        those stories. This feature is not available for Instagram posts that are
                                        visible to all
                                        followers.
                                    </li>
                                    <li>Instagram stories also have a layout feature where you can directly create a
                                        photo
                                        collage using multiple images and upload it as a single story.
                                    </li>
                                    <li>Various other apps help in creating aesthetic story layouts for Instagram.</li>
                                </ol>
                                From the above points, it is clear that you can make use of Instagram stories in
                                numerous ways to create the desired photo collage. Find out below the steps to make
                                beautiful Instagram slides for your stories.
                            </div>
                        </div>
                        <div className={blogInfoStyles.blogInfo_container}>

                            <div>
                                <div style={{float: 'right', marginLeft: 50}} className={blogInfoStyles.blogInfo_video}>
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ggtR7qIcvoI"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
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
                        <div className={blogInfoStyles.textBlock}>
                            <div className={blogInfoStyles.textBlock_text}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                                elementum semper nisi.
                                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                                ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                                rhoncus.
                            </div>
                        </div>
                    </div>
                </Layer>
            </div>
        </div>
    );
};

export default Blog1;
