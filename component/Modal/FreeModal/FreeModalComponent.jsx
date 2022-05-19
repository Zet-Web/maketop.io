import React, {useState} from 'react';
import Modal from "react-modal";
import styles from "../Modal.module.sass";
import FreeModalLogin from "./FreeModalLogin";
import FreeModalEmail from "./FreeModalEmail";
import FreeModalAccount from "./FreeModalAccount";
import FreeModalPosts from "./FreeModalPosts";
import useAxios from "../../../hooks/useAxios";
import {useRouter} from "next/router";
const FreeModalComponent = ({open,setOpen, counts, priceValue, system , service  }) => {
    const axios = useAxios()
    const router=useRouter()
    const customStyles = {
        overlay:{
            zIndex: 14,
            background: 'rgba(0,0,0,.5)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            marginTop:30,
            background: "transparent",
            maxWidth:600,
            width:"100%",
            height: "calc(100% - 10px)"
        },
    };
    const[modal,setModal]=useState(1)
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [userInfoPosts, setUserInfoPosts] = useState([]);
    const [type, setType] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [activePost, setActivePost] = useState([])
    const [result, setResult] = useState({});
    const deleteActivePost = (index) => {
        const newPost = activePost.filter(post => post !== index)
        setActivePost(newPost)
    }

    const getPosts = async() => {

        if(!userName || !userEmail) return setError(true)
        try{
            const data = new FormData();
            data.append('system', system)
            data.append('service', service)
            data.append('count', counts)
            data.append('username', userName)
            const res = axios.post(`/get_posts_v2.php`, data)

            res.then((e) => {
                if (e?.data?.result === "Ok") {
                    setUserInfo(prev => e?.data?.data)
                    setType(prev => e?.data?.data?.plan?.types?.t1)

                    console.log(e?.data?.data.posts)
                }
                setModal(3)
                setErrorMessage(e?.data?.text)

            })
        }catch(e){
            console.log(e)
        }
    }
    const sendOrder = async() => {
        !result&&setIsLoading(true)
        try {
            const data = new FormData();
            data.append('email', userEmail)
            data.append('system', system)
            data.append('service', service)
            data.append('type', type.name === userInfo?.plan?.types?.t1?.name ? 't1' : 't2')
            data.append('count', counts)
            data.append('username', userName)
            for (let i=0; i<activePost.length ; i++){
                data.append(`url[${i}]`, activePost[i].link)
            }
            for (let i=0; i<activePost.length ; i++){
                data.append(`img[${i}]`, activePost[i].img)
            }
            const res = axios.post( '/create_test_order_v2.php', data)
            res.then((e) => {
                if (e?.data?.result === 'Ok'){
                    setResult(prev => e?.data)
                    setModal(5)
                    console.log(e?.data)
                }
                setErrorMessage(e?.data?.text)

            })
            console.log(res)
        }catch(e){
            console.log(e)
        }finally {
            await router.push("/thanks-for-shot")
        }
    }
    return (
        <Modal
            isOpen={open}
            onRequestClose={() => setOpen(prev => false)}
            style={customStyles}
            ariaHideApp={false}
        >
            <div className={styles.modal_container}>
                {modal !== 1 &&
                    <p className={styles.backButton} onClick={() => setModal(modal - 1)}> {"< Back"} </p>}
                <img src="/modalClose.svg" className={styles.close} onClick={() => setOpen(false)}/>
                {modal === 1 &&
                    <FreeModalLogin modal={modal} setModal={setModal} setUserName={setUserName} userName={userName} service={service}/>}
                {modal === 2 &&
                    <FreeModalEmail
                                service={service} setUserEmail={setUserEmail} userEmail={userEmail}
                                getPosts={getPosts} errorMessage={errorMessage} />}
                {modal === 3 &&
                    <FreeModalAccount modal={modal} setModal={setModal} userInfo={userInfo} userName={userName}/>}
                {modal === 4 &&
                    <FreeModalPosts modal={modal} setModal={setModal} userInfo={userInfo} counts={counts}
                                type={type} activePost={activePost} deleteActivePost={deleteActivePost}
                                setActivePost={setActivePost} errorMessage={errorMessage}
                                    sendOrder={sendOrder} service={service}/>}
            </div>
        </Modal>
    );
};

export default FreeModalComponent;
