/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './Modal.module.sass';
import Modal from 'react-modal';
import FreeModalLogin from './FreeModal/FreeModalLogin';
import FreeModalEmail from './FreeModal/FreeModalEmail';
import FreeModalAccount from './FreeModal/FreeModalAccount';
import ModalLogin from './ModalLogin';
import ModalEmail from './ModalEmail';
import ModalAccount from './ModalAccount';
import ModalPosts from './ModalPosts';
import ModalPayment from './ModalPayment';
import useAxios from '../../hooks/useAxios';
import { useRouter } from 'next/router';

export const ModalComponent = ({
  open,
  setOpen,
  counts,
  priceValue,
  system,
  service,
}) => {
  const axios = useAxios();
  const customStyles = {
    overlay: {
      zIndex: 14,
      background: 'rgba(0,0,0,.5)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      marginTop: 30,
      background: 'transparent',
      maxWidth: 600,
      width: '100%',
    },
  };
  const [modal, setModal] = useState(1);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [type, setType] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activePost, setActivePost] = useState([]);
  const [result, setResult] = useState({});
  const router = useRouter();

  const deleteActivePost = (index) => {
    const newPost = activePost.filter((post) => post !== index);
    setActivePost(newPost);
  };

  const getPosts = async () => {
    if (!userName || !userEmail) return setError(true);
    if (service === 'Followers' && priceValue === '0.00') {
      await sendAdditionalOrder();
      result?.result === 'Ok'
        ? await router.push('/thanks-for-shot')
        : await router.push('/error');
    }
    if (service === 'Followers') {
      setModal(5);
      system === 'Instagram' ? await sendOrder() : await sendAdditionalOrder();
    }
    try {
      const data = new FormData();
      data.append('system', system);
      data.append('service', service);
      data.append('count', counts);
      data.append('username', userName);
      const res = axios.post(`/get_posts_v2.php`, data);

      res.then((e) => {
        if (e?.data?.result === 'Ok') {
          setUserInfo((prev) => e?.data?.data);
          setType((prev) => e?.data?.data?.plan?.types?.t1);
          setModal(3);
        }
        setErrorMessage(e?.data?.text);
        console.log(userInfo);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const sendOrder = async () => {
    setIsLoading(true);
    console.log(isLoading);
    try {
      const data = new FormData();
      data.append('email', userEmail);
      data.append('system', system);
      data.append('service', service);
      data.append(
        'type',
        type.name === userInfo?.plan?.types?.t1?.name ? 't1' : 't2'
      );
      data.append('count', counts);
      data.append('username', userName);
      for (let i = 0; i < activePost.length; i++) {
        data.append(`url[${i}]`, activePost[i].link);
      }
      for (let i = 0; i < activePost.length; i++) {
        data.append(`img[${i}]`, activePost[i].img);
      }

      const res = axios.post(
        `${
          priceValue === '0.00'
            ? '/create_test_order_v2.php'
            : '/create_order_v2.php'
        }`,
        data
      );
      res.then((e) => {
        if (e?.data?.result === 'Ok') {
          setResult((prev) => e?.data);
          setModal(5);
          console.log(e?.data);
        }
        setErrorMessage(e?.data?.text);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const sendAdditionalOrder = async () => {
    setIsLoading(true);
    try {
      const data = new FormData();
      data.append('email', userEmail);
      data.append('system', system);
      data.append('service', service);
      data.append('plan', counts);
      data.append('url', `https://www.instagram.com`);
      const res = axios.post('/additional_create_order.php', data);
      res.then((e) => {
        if (e?.data?.result === 'Ok') {
          setResult((prev) => e?.data);
          setModal(2);
          console.log(e?.data);
        }
        setErrorMessage(e?.data?.text);
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
      ariaHideApp={false}
    >
      {system === 'Instagram' ? (
        <div className={styles.modal_container}>
          {modal !== 1 && (
            <p
              className={styles.backButton}
              onClick={() => setModal(modal - 1)}
            >
              {' '}
              {'< Back'}{' '}
            </p>
          )}
          <img
            src='/modalClose.svg'
            className={styles.close}
            onClick={() => setOpen(false)}
          />
          {priceValue === '0.00'
            ? modal === 1 && (
                <FreeModalLogin
                  modal={modal}
                  setModal={setModal}
                  setUserName={setUserName}
                  userName={userName}
                  service={service}
                />
              )
            : modal === 1 && (
                <ModalLogin
                  modal={modal}
                  setModal={setModal}
                  counts={counts}
                  priceValue={priceValue}
                  service={service}
                  setUserName={setUserName}
                  userName={userName}
                  system={system}
                />
              )}
          {modal === 2 && priceValue === '0.00' ? (
            <FreeModalEmail
              service={service}
              setUserEmail={setUserEmail}
              userEmail={userEmail}
              getPosts={getPosts}
              errorMessage={errorMessage}
            />
          ) : (
            modal === 2 && (
              <ModalEmail
                modal={modal}
                setModal={setModal}
                counts={counts}
                priceValue={priceValue}
                service={service}
                setUserEmail={setUserEmail}
                userEmail={userEmail}
                getPosts={getPosts}
                errorMessage={errorMessage}
                system={system}
                isLoading={isLoading}
              />
            )
          )}
          {modal === 3 && priceValue === '0.00' ? (
            <FreeModalAccount
              modal={modal}
              setModal={setModal}
              userInfo={userInfo}
              userName={userName}
            />
          ) : (
            modal === 3 && (
              <ModalAccount
                modal={modal}
                setModal={setModal}
                userInfo={userInfo}
                userName={userName}
              />
            )
          )}
          {modal === 4 && (
            <ModalPosts
              modal={modal}
              setModal={setModal}
              userInfo={userInfo}
              counts={counts}
              type={type}
              activePost={activePost}
              deleteActivePost={deleteActivePost}
              setActivePost={setActivePost}
              errorMessage={errorMessage}
              sendOrder={sendOrder}
              service={service}
              priceValue={priceValue}
            />
          )}
          {modal === 5 && (
            <ModalPayment
              modal={modal}
              setModal={setModal}
              result={result}
              counts={counts}
              service={service}
              priceValue={priceValue}
              isLoading={isLoading}
            />
          )}
        </div>
      ) : (
        <div className={styles.modal_container}>
          {modal !== 1 && (
            <p
              className={styles.backButton}
              onClick={() => setModal(modal - 1)}
            >
              {' '}
              {'< Back'}{' '}
            </p>
          )}
          <img
            src='/modalClose.svg'
            className={styles.close}
            onClick={() => setOpen(false)}
          />
          {modal === 1 && (
            <ModalEmail
              modal={modal}
              setModal={setModal}
              counts={counts}
              priceValue={priceValue}
              service={service}
              setUserEmail={setUserEmail}
              userEmail={userEmail}
              getPosts={sendAdditionalOrder}
              errorMessage={errorMessage}
              system={system}
            />
          )}

          {modal === 2 && (
            <ModalPayment
              modal={modal}
              setModal={setModal}
              result={result}
              priceValue={priceValue}
            />
          )}
        </div>
      )}
    </Modal>
  );
};
