import '../styles/globals.sass';
import React, { createContext, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import Head from 'next/head';
export const MeContext = createContext();
import { heads } from '../heads/heads';
function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true);
  const axios = useAxios();
  const [allInfo, setAllInfo] = useState({});
  const [price, setPrice] = useState({});
  const [additionalPrice, setAdditionalPrice] = useState([]);
  const [comment, setComment] = useState([]);
  const [meta, setMeta] = useState('buy-instagram-likes');

  const getComment = async (service, type) => {
    try {
      const data = new FormData();
      data.append('system', service);
      data.append('service', type);
      const res = await axios.post('/review_list.php', data);

      if (res.status === 200) {
        setComment((prev) => res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getAllInfo = async () => {
    try {
      const res = await axios.post('/user_info.php');
      if (res.status === 200) {
        setAllInfo((prev) => res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getAdditionalPrice = async (service, type) => {
    try {
      const res = await axios.post('/additional_services.php');

      if (res.status === 200) {
        setAdditionalPrice((prev) =>
          Object.entries(res?.data?.data[service][type]['plans'])
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getPrice = async () => {
    try {
      const res = await axios.post('/get_plans.php');

      if (res.status === 200) {
        setPrice((prev) => res?.data?.data?.Instagram);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllInfo();
    getPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      !isSSR && (
        <>
          <Head>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1, maximum-scale=1'
            />
            <meta
              name='facebook-domain-verification'
              content='qyk8si5jqwk9m6240785cypx4jcij9'
            />
            <meta
              name='google-site-verification'
              content='oxb8vz7MsAwxDNG7gbs5_RfYolWa5a9UITEh9d1CQKE'
            />
            <title>MakeTop</title>
            <meta name='description' content={heads[meta].description} />
            <meta name='og:description' content={heads[meta].description} />
            <meta property='og:locale' content='en_US' />
            <meta property='og:type' content='article' />
            <meta property='og:title' content={heads[meta].title} />
            <meta property='title' content={heads[meta].title} />
            <meta property='og:url' content={heads[meta].canonical} />
            <link rel='canonical' href={heads[meta].canonical} />
          </Head>
          <MeContext.Provider
            value={{
              allInfo,
              getAllInfo,
              price,
              getComment,
              comment,
              additionalPrice,
              getAdditionalPrice,
              setAdditionalPrice,
            }}
          >
            <Component {...pageProps} />
            <link rel='shortcut icon' href='/favicon.ico' />
          </MeContext.Provider>
        </>
      )
    );
  }
}
export default MyApp;
