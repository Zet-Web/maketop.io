import React from 'react';
import blogInfoStyles from "../styles/BlogItemInfo.module.sass";

const BlogInfoListVideo = ({title,text,item,reverse}) => {
    return (
        <div className={blogInfoStyles.blogVideo_item} style={{flexDirection:reverse?"row-reverse":"row"}}>
            <div>
                <div className={blogInfoStyles.blogVideo_video} style={ reverse?{ float:'right',marginLeft:40}:{ float:'left',marginRight:40}}>{item}</div>
                <p className={blogInfoStyles.blogVideo_title} >{title}</p>
                {text}
            </div>
        </div>
    );
};

export default BlogInfoListVideo;
