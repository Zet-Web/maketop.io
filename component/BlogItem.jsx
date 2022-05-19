/* eslint-disable @next/next/no-img-element */
import React from 'react';
import blogStyles from "../styles/Blog.module.sass";

const BlogItem = ({onClick,text,img}) => {
    return (
        <div className={blogStyles.blog_item}>
            <div className={blogStyles.blog_item_date}>
                7th Feb 2022
            </div>
            <div style={{width:450,height:220}}>
                <img src={img} alt="image" width="100%" height="100%"/>
            </div>

            <p className={blogStyles.blog_item_title}>{text}</p>
            <p className={blogStyles.blog_item_text}>No, Instagram has no method of knowing the
                difference between natural likes and those you purchase. To the platform, all of
                these likes are legitimate and permanent. As such, there is no risk in using our
                services.</p>
            <a style={{color:"#1281FF",textDecoration:"underline"}} onClick={onClick}>Read more</a>
        </div>
    );
};

export default BlogItem;
