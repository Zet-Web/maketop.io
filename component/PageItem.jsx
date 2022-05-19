import React from 'react';
import blogStyles from "../styles/Blog.module.sass";
const PageItem = ({active,page,onClick}) => {
    return (
        <div className={`${blogStyles.page_item} ${active?blogStyles.page_item_active:""}`} onClick={onClick}>
            <p>{page}</p>
        </div>
    );
};

export default PageItem;
