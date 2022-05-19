/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/Home.module.sass';
import buyLikesStyles from '../styles/BuyLikes.module.sass';
import { Layer } from '../component/Layer/Layer';
import { PageTitle } from '../component/PageTitle/PageTitle';
import { ButtonComponent } from '../component/ButtonComponent/ButtonComponent';
import BuyLikes from '../component/BuyLikes/BuyLikes';
import infoStyles from '../component/InfoBlock/InfoBlock.module.sass';
import { ModalComponent } from '../component/Modal/ModalComponent';
import { MeContext } from './_app';
import ModalReview from '../component/Modal/ModalReview';
import OwnComment from '../component/OwnComment';
import ReviewsGenerator from '../component/ReviewsGenerator';
import Head from 'next/head';
import { useRouter } from 'next/router';

const BuyInstagramLikes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState({ 1: 'active', 2: 'disabled' });
  const [windowInnerWidth, setWindowInnerWidth] = useState('');
  const { price, getComment, comment } = useContext(MeContext);
  const [readTextMore, setReadTextMore] = useState(false);
  const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
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

  // const changePlan = () => {
  //   const data = new FormData();
  //   data.append('type', 'load_plans');
  //   data.append('system', 'Instagram');
  //   data.append('service', 'Auto-Likes Subs');
  //   const res = axios.post('/send_log.php', data);
  //   console.log(res);
  // };

  useEffect(() => {
    if (window) setWindowInnerWidth(window.innerWidth);
    getComment('Instagram', 'Likes');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          content='Buy Instagram likes from MakeTop. Cheap instant delivery to your profile. High rated likes and 100% quality. 24/7 Simple payment by crypto or credit card'
        />
        <meta
          name='og:description'
          content='Buy Instagram likes from MakeTop. Cheap instant delivery to your profile. High rated likes and 100% quality. 24/7 Simple payment by crypto or credit card'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content='Buy Instagram Likes Guaranteed by MakeTop #1 since 2017'
        />
        <meta
          property='title'
          content='Buy Instagram Likes Guaranteed by MakeTop #1 since 2017'
        />
        <meta name='twitter:card' content='summary' />
        <meta
          name='twitter:description'
          content='Buy Instagram auto likes from MakeTop. Instant delivery, real auto likes and friendly 24/7 customer support. Try us today.'
        />
        <meta
          name='twitter:description'
          content='Buy Instagram  likes from MakeTop. Instant delivery, real  likes and friendly 24/7 customer support. Try us today.'
        />
        <meta
          name='twitter:title'
          content="Buy Instagram Auto Likes From The world's #1 Site (2022)- maketop"
        />
        <meta
          name='twitter:title'
          content="Buy Instagram  Likes From The world's #1 Site (2022)- maketop"
        />
        <meta
          property='og:url'
          content='https://maketop.io/buy-instagram-likes'
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
          background: 'transparent',
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
          <Layer type='link'>
            <div className={`container`}>
              <PageTitle title={'Buy Instagram likes  '} />
              <div className={styles.phone}>
                <img
                  src='/buyLikesPhoto.png'
                  alt='Buy Instagram Likes'
                  className={styles.instagramImg}
                />
                <div className={buyLikesStyles.mainTitle}>
                  <p className={buyLikesStyles.title}>BUY INSTAGRAM LIKES</p>
                  <p className={buyLikesStyles.text}>
                    Where you can buy cheap likes for Instagram photos and
                    videos. Buy real Insta
                    <br /> likes for the most reasonable prices here and grow
                    your Instagram popularity in a flash!
                  </p>
                  <ButtonComponent
                    text={'Leave Feedback'}
                    type={'instagram'}
                    onClick={() => router.push('/')}
                  />
                </div>
              </div>
              <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                <p>GET STARTED</p>
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
                    {price?.Likes?.plans.map((item, index) => (
                      <BuyLikes
                        key={item?.count}
                        likes={item?.count}
                        newPrice={item?.price}
                        color='#285FFF'
                        text='Real Instagram Likes'
                        type={'instagram'}
                        id={'LIKES'}
                        onClick={() => {
                          router.push({
                            pathname: '/buy-instagram-likes',
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
                    {price['Auto-Likes Subs']?.plans.map((item, index) => (
                      <BuyLikes
                        key={item?.count}
                        likes={item?.count}
                        newPrice={item?.price}
                        color='#285FFF'
                        text='Real Instagram Auto-Likes'
                        type={'instagram'}
                        id={'ALIKES'}
                        onClick={() => {
                          router.push({
                            pathname: '/buy-instagram-likes',
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
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.{' '}
                </p>
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

export default BuyInstagramLikes;
