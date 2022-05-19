/* eslint-disable @next/next/no-img-element */
import React from 'react';
import blogInfoStyles from "../styles/BlogItemInfo.module.sass";

const BlogInfoListItem = ({img,title,text,item}) => {
    return (
        <div className={blogInfoStyles.blogList_item}>
            <div>
                <div> <img src={img}alt="image" /></div>
                <p className={blogInfoStyles.blogList_title}>{title}</p>
                   {text}
            </div>
        </div>
    );
};

export default BlogInfoListItem;
