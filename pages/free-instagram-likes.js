/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/Home.module.sass';
import { Layer } from '../component/Layer/Layer';
import { PageTitle } from '../component/PageTitle/PageTitle';
import buyLikesStyles from '../styles/BuyLikes.module.sass';
import { ButtonComponent } from '../component/ButtonComponent/ButtonComponent';
import BuyLikes from '../component/BuyLikes/BuyLikes';

import infoStyles from '../component/InfoBlock/InfoBlock.module.sass';
import { ModalComponent } from '../component/Modal/ModalComponent';

import { MeContext } from './_app';
import OwnComment from '../component/OwnComment';
import ModalReview from '../component/Modal/ModalReview';
import ReviewsGenerator from '../component/ReviewsGenerator';
import Head from 'next/head';
import { useRouter } from 'next/router';

const FreeInstagramLikes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState({ 1: 'active', 2: 'disabled' });
  const [windowInnerWidth, setWindowInnerWidth] = useState('');
  const { price, getComment, comment } = useContext(MeContext);
  const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
  const [readTextMore, setReadTextMore] = useState(false);
  const router = useRouter();
  const { query } = useRouter();

  const style = {
    active: {
      background:
        'linear-gradient(88.32deg, #FEDA7D -15.05%, #D62F81 34.34%, #5E0DFF 108.12%)',
      width: 228,
    },
    disabled: {
      background: 'transparent',
      boxShadow: 'none',
      width: 228,
    },
  };

  useEffect(() => {
    if (window) setWindowInnerWidth(window.innerWidth);
    getComment('Instagram', 'Likes');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const counts = 10;
  const priceValue = '0.00';

  return (
    <div
      className={styles.background}
      style={{
        background: "url('instagramBg.png') no-repeat 100%  ",
        backgroundSize: 'cover',
      }}
    >
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
        <meta
          name='description'
          content='Free Instagram likes from MakeTop platform is recommended by influencers. Get 25 likes immediately without password and personal information'
        />
        <meta
          name='description'
          content='Free Instagram likes from MakeTop platform is recommended by influencers. Get 25 likes immediately without password and personal information'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content='Free Instagram Likes - Get Test 25 - 100% Work'
        />
        <meta
          property='title'
          content='Free Instagram Likes - Get Test 25 - 100% Work'
        />
        <meta name='twitter:card' content='summary' />
        <meta
          name='twitter:description'
          content='Free Instagram auto likes from MakeTop. Instant delivery, real auto likes and friendly 24/7 customer support. Try us today.'
        />
        <meta
          name='twitter:description'
          content='Free Instagram  likes from MakeTop. Instant delivery, real  likes and friendly 24/7 customer support. Try us today.'
        />
        <meta
          name='twitter:title'
          content="Free Instagram Auto Likes From The world's #1 Site (2022)- maketop"
        />
        <meta
          name='twitter:title'
          content="Free Instagram  Likes From The world's #1 Site (2022)- maketop"
        />
        <meta
          property='og:url'
          content='https://maketop.io/automatic-instagram-likes'
        />
        <link
          rel='canonical'
          href='https://maketop.io/automatic-instagram-likes'
        />
      </Head>
      <div
        style={{
          maxWidth: 1920,
          width: '100%',
          margin: '0 auto',
          overflowX: 'hidden',
        }}
      >
        {isOpen && (
          <ModalComponent
            open={isOpen}
            setOpen={setIsOpen}
            service={query.service}
            counts={query.counts}
            priceValue={query.priceValue}
            system={query.system}
          />
        )}
        <div className={styles.container}>
          <div className={styles.background} />
          <Layer type='link'>
            <div className={`container`}>
              <PageTitle title={'Buy Instagram likes  '} />
              <div className={styles.phone}>
                <img
                  src='/buyLikesPhoto.png'
                  alt='Free Instagram Likes'
                  className={styles.instagramImg}
                />
                <div className={buyLikesStyles.mainTitle}>
                  <p className={buyLikesStyles.title}>FREE INSTAGRAM LIKES</p>
                  <p className={buyLikesStyles.text}>
                    Where you can buy cheap likes for Instagram photos and
                    videos. Buy real Insta
                    <br /> likes for the most reasonable prices here and grow
                    your Instagram popularity in a flash!
                  </p>
                  <ButtonComponent
                    text={'Free 10 Instagram likes'}
                    type={'instagram'}
                    id={'FREE25LIKES'}
                    onClick={() => {
                      router.push({
                        pathname: '/basket',
                        query: {
                          service: 'Likes',
                          counts: counts,
                          system: 'Instagram',
                          priceValue: priceValue,
                        },
                      });
                    }}
                  />
                </div>
              </div>
              <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                <p>OR BUY MORE</p>
                <div className={buyLikesStyles.getStartedButtons}>
                  <ButtonComponent
                    text={'Per post'}
                    type={'instagram'}
                    style={style[type['1']]}
                    onClick={() => {
                      setType({ 1: 'active', 2: 'disabled' });
                    }}
                  />
                  <ButtonComponent
                    text={'Subscription'}
                    type={'instagram'}
                    style={style[type['2']]}
                    onClick={() => {
                      setType({ 1: 'disabled', 2: 'active' });
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                {type[1] === 'active' ? (
                  <div className={buyLikesStyles.buyLikes_item_container}>
                    {price?.Likes?.plans.map((item) => (
                      <BuyLikes
                        key={item?.count}
                        likes={item?.count}
                        newPrice={item?.price}
                        color='#285FFF'
                        text='Real Instagram Likes'
                        type={'instagram'}
                        onClick={() => {
                          router.push({
                            pathname: '/free-instagram-likes',
                            query: {
                              service: 'Likes',
                              counts: item?.count,
                              system: 'Instagram',
                              priceValue: item?.price,
                            },
                          });
                          setIsOpen(true);
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  <div className={buyLikesStyles.buyLikes_item_container}>
                    {price['Auto-Likes Subs']?.plans.map((item) => (
                      <BuyLikes
                        key={item?.count}
                        likes={item?.count}
                        newPrice={item?.price}
                        color='#285FFF'
                        text='Real Instagram Auto-Likes'
                        type={'instagram'}
                        onClick={() => {
                          router.push({
                            pathname: '/free-instagram-likes',
                            query: {
                              service: 'Likes',
                              counts: item?.count,
                              system: 'Instagram',
                              priceValue: item?.price,
                            },
                          });
                          setIsOpen(true);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <p className={buyLikesStyles.reviewsTitle}>REVIEWS</p>
              <div className={buyLikesStyles.reviews_container}>
                {comment && (
                  <ReviewsGenerator type='instagram' comment={comment} />
                )}
                <OwnComment type='instagram' service='Likes' />
                {isReviewButtonPress && (
                  <ModalReview
                    open={isReviewButtonPress}
                    setOpen={setIsReviewButtonPress}
                    type='instagram'
                    service='Likes'
                  />
                )}
                <span className={buyLikesStyles.ownHiddenButton}>
                  <ButtonComponent
                    text={'Leave comment'}
                    type={'instagram'}
                    style={{ maxWidth: 228, width: '100%' }}
                    onClick={() => setIsReviewButtonPress(true)}
                  />
                </span>
              </div>
              <div className={infoStyles.info_block}>
                <div className={infoStyles.info_under}>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Quisque rutrum. Aenean imperdiet. Etiam
                    ultricies nisi vel augue. Curabitur ullamcorper ultricies
                    nisi. Nam eget dui. Etiam rhoncus.{' '}
                  </p>
                  <div className={infoStyles.info_video}>
                    <iframe
                      width='100%'
                      height='315'
                      src='https://www.youtube.com/embed/8vfxHE2DGzU'
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                {readTextMore && (
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus.
                  </p>
                )}
                <a
                  style={{ color: '#1281FF', textDecoration: 'underline' }}
                  onClick={() => setReadTextMore(!readTextMore)}
                >
                  {readTextMore ? 'Close' : 'Read more'}
                </a>
              </div>
            </div>
          </Layer>
        </div>
      </div>
    </div>
  );
};

export default FreeInstagramLikes;
