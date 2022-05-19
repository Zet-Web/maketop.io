import React, {useState} from 'react';
import styles from "../Modal.module.sass";
import {ButtonComponent} from "../../ButtonComponent/ButtonComponent";
import {useRouter} from "next/router";

const FreeModalPosts = (setModal,userInfo,type,counts,activePost,setActivePost,deleteActivePost,errorMessage,sendOrder,service) => {
    const router=useRouter()
    const postIcons={
        "Likes":"/postHeart.svg",
        "Followers":"/postfollowers.svg",
        "Views":"/postview.svg",
        "Comments":"/postcomment.svg"
    }
    return (
        <>
            <p className={styles.modal_title}>Free Instagram {service}</p>
            <div className={styles.modal_stageBlock}>
                <div className={styles.modal_stageItem_active}>
                    <p>01</p>
                </div>
                <img src="/stageLine1.svg"/>
                <div className={styles.modal_stageItem}>
                    <p>02</p>
                </div>
            </div>
            <div className={styles.posts_container}>
                {userInfo?.posts?.map((post, index) => {
                    return (
                        <div key={index} className={styles.posts_item} style={{background: `url(${post.img})`}}
                             onClick={() =>
                                 activePost.includes(post) ?
                                     deleteActivePost(post) : activePost.length <= 9 ?
                                         setActivePost(prev => ([...prev, post])) : null

                             }>
                            {activePost.includes(post) && <div className={styles.chosenPost}>
                                <div style={{display: 'flex',alignItems:'center',gap:5}}>
                                    <img src={postIcons[service]}/>
                                    <p>{Math.round(counts/activePost.length)}</p>
                                </div>
                                <img src="/postClose.svg" style={{cursor: 'pointer'}}
                                     onClick={() => deleteActivePost(post)}/>
                            </div>}
                        </div>
                    )
                })}
            </div>
            <ButtonComponent type="title" text="25 free like" onClick={()=> {
                sendOrder()
                router.push("/thanks-for-shot")
            }}/>
        </>
    );
};

export default FreeModalPosts;
