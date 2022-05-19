import React, {useState} from 'react';
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import Reviews from "./Reviews/Reviews";
import {colors} from "../colors/colors";

const ReviewsGenerator = ({comment,type}) => {
    const [readMore,setReadMore]=useState(false)
    return (
        <div style={{width:"100%"}}>
            {comment&&
                <div className={buyLikesStyles.reviews_comments_container} style={{ height:readMore&&comment.length>3? 700:"max-content",
                    overflowY: readMore?"scroll":"hidden"}}  >
                    {readMore ?comment?.map((item,index) =>
                            <Reviews key={index} type={type} text={item.text} name={item.name} stars={parseInt(item.star)}/>
                        ):
                        comment?.map((item,index) => index<3&&
                            <Reviews key={index} type={type} text={item.text} name={item.name} stars={parseInt(item.star)}/>
                        )
                    }

                </div>
            }
            {comment&&<p className={`container`} style={{marginTop: 20}}><a style={{color: colors[type].likesColor.color, cursor: 'pointer'}} onClick={()=>comment&&setReadMore(true)}>Read More
                Reviews</a></p>}
        </div>
    );
};

export default ReviewsGenerator;
