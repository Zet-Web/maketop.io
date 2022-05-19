import React, {useState} from 'react';
import styles from "./Modal.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import {useRouter} from "next/router";
import {Check, Delete} from "@material-ui/icons";

const ModalPosts = ({setModal,userInfo,type,counts,activePost,setActivePost,deleteActivePost,errorMessage,sendOrder,service,priceValue}) => {
    const router = useRouter()
    const [activeAddition, setActiveAddition] = useState([])
    const postIcons={
        "Likes":"/postHeart.svg",
        "Followers":"/postfollowers.svg",
        "Views":"/postview.svg",
        "Comments":"/postcomment.svg"
    }
    const deleteActiveAddition = (item) => {
        const newAddition = activeAddition.filter(addition => addition !== item)
        setActiveAddition(newAddition)
    }
    const [buttonType, setButtonType] = useState({
        1: 'title',
        2: 'outline',
    })

    const additions = [1,2,3]
    return (
        priceValue==="0.00"?
            <>
                <p className={styles.modal_title}>Free Instagram {service}</p>
                <div className={styles.modal_stageBlock}>
                    <div className={styles.modal_stageItem_active}>
                        <p>01</p>
                    </div>
                    <img src="/stageLine1.svg"/>
                    <div className={styles.modal_stageItem_active}>
                        <p>02</p>
                    </div>
                </div>
                <div className={styles.posts_container}>
                    {userInfo?.posts.map((post, index) => {
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
            </>:
        < >
            <p className={styles.modal_title}><p style={{color:" rgba(40, 95, 255, 1)"}}>Choose Post</p></p>
            <div className={styles.modal_stageBlock}>

                <div className={styles.modal_stageItem}>
                    <p>01</p>
                </div>

                <div className={styles.modal_stageItem_active}>
                    <p>02</p>
                </div>
                <div className={styles.modal_stageItem}>
                    <p>03</p>
                </div>
            </div>
            <div className={styles.posts_container}>
                {userInfo?.posts.map((post, index) => {
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
            <div className={styles.modalMore_block}>
                <span/>
                <span/>
                <span/>
            </div>
            <div className={styles.buttonsRow}>
                <ButtonComponent text={userInfo?.plan?.types?.t1?.name}  type={userInfo?.plan?.types?.t1.name === type.name ? 'title' : 'outline'} onClick={() => {
                    setButtonType(userInfo?.plan?.types?.t1)
                }}/>
                <ButtonComponent text={userInfo?.plan?.types?.t2?.name} disabled={userInfo?.plan?.types?.t2?.name === 'Custom'}    type={userInfo?.plan?.types?.t2.name === type.name ? 'title' : 'outline'} onClick={() => {

                    setButtonType(userInfo?.plan?.types?.t2)

                }}/>
            </div>
            <div className={styles.addition_block}>
                {additions.map((addition,index)=>{
                    return (
                        <div key={index} className={styles.modal_addition_item}>
                            <div className={styles.rowBlock}>
                                <div className={styles.modal_account_block_circle} onClick={() =>
                                    activeAddition.includes(addition) ?
                                        deleteActiveAddition(addition ) :
                                        setActiveAddition( [...activeAddition, addition])

                                }>
                                    {activeAddition.includes(addition)&&<Check style={{color:"rgba(15, 133, 255, 1)"}}  />}
                                </div>
                                <p>+500 Impressions</p>
                            </div>
                            <div className={styles.rowBlock}>
                                <p style={{color:"rgba(15, 133, 255, 1)"}}>+$7.50</p>
                                <div className={styles.modal_account_block_circle}>
                                    <p style={{color:"rgba(15, 133, 255, 1)"}}>i</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>
            <div className={styles.rowBlock}>
            <ButtonComponent id={"CHOOSEPAYMENT"} type="title" text={`Choose payment method for ${type?.price} $`}  style={{maxWidth:328}} onClick={sendOrder}/>
            <div className={styles.modal_account_block_circle} style={{borderColor:"rgba(15, 133, 255, 1)",maxWidth:40,height:40}}>
                <img src="/shopping-cart.svg"/>
            </div>
            </div>
        </  >
    );
};

export default ModalPosts;
