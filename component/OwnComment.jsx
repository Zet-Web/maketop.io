import React, {useState} from 'react';
import buyLikesStyles from "../styles/BuyLikes.module.sass";
import ReactStars from "react-rating-stars-component";
import {ButtonComponent} from "./ButtonComponent/ButtonComponent";
import useAxios from "../hooks/useAxios";
import {colors} from "../colors/colors";

const OwnComment = ({type,service}) => {
    const axios = useAxios()
    const [textComment, setTextComment] = useState('');
    const [star, setStar] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const addComment = async() => {
        setIsLoading(true)
        try{
            const data = new FormData();
            data.append('system', 'Instagram')
            data.append('service', service)
            data.append('star', star)
            data.append('text', textComment)
            const res = await axios.post(`/review_send.php`, data)
            if (res.data.result === 'Ok'){

                setTextComment('')
                setEmail('')
                setStar(5)
                setSuccessMessage("Sended!")
            }
            setErrorMessage(res?.data?.text)
        }catch(e){
            console.log(e)
        }finally {
            setIsLoading(false)
        }
    }
    return (
        <div className={buyLikesStyles.ownComment}>
            <p className={buyLikesStyles.ownComment_title}>Leave comment</p>

            <div className={buyLikesStyles.commentBlock}>
                <p>Your email</p>
                <input placeholder="Email" onChange={(e) => setEmail(prev => e.target.value)}/>
            </div>
            <div className={buyLikesStyles.commentBlock}>
                <p>Comment</p>
                <input placeholder="Leave some words" onChange={(e) => setTextComment(prev => e.target.value)}/>
            </div>
            <div className={buyLikesStyles.commentButton}>
                <ReactStars
                    count={5}
                    size={24}
                    activeColor={colors[type].likesColor.color}
                />
                <p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>
                <p style={{color:"green",textAlign:'center'}}>{successMessage}</p>
                <ButtonComponent text={isLoading?"Loading...":'Leave comment'} type={type}
                                 style={{maxWidth:228,width:'100%'} }
                onClick={addComment}
                />

            </div>





        </div>
    );
};

export default OwnComment;
