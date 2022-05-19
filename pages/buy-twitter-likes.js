/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/Home.module.sass';
import { Layer } from '../component/Layer/Layer';
import { PageTitle } from '../component/PageTitle/PageTitle';
import buyLikesStyles from '../styles/BuyLikes.module.sass';
import { ButtonComponent } from '../component/ButtonComponent/ButtonComponent';
import youtubeStyles from '../styles/BuyYoutube.module.sass';
import BuyLikes from '../component/BuyLikes/BuyLikes';

import infoStyles from '../component/InfoBlock/InfoBlock.module.sass';
import { MeContext } from './_app';

import { ModalComponent } from '../component/Modal/ModalComponent';
import ReviewsGenerator from '../component/ReviewsGenerator';
import OwnComment from '../component/OwnComment';
import ModalReview from '../component/Modal/ModalReview';
import Head from 'next/head';
import { useRouter } from 'next/router';

const BuyTwitterLikes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState('');
  const { comment, getComment, additionalPrice, getAdditionalPrice } =
    useContext(MeContext);
  const [readTextMore, setReadTextMore] = useState(false);
  const [isReviewButtonPress, setIsReviewButtonPress] = useState(false);
  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    if (window) setWindowInnerWidth(window.innerWidth);
    getComment('Twitter', 'Likes');
    getAdditionalPrice('Twitter', 'Post Likes');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={styles.background}
      style={{
        background: "url('/twitterBg.png') no-repeat 100%  ",
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
          content='Buy Twitter likes with simple steps and normal-looking gradual delivery. Top likes from #1 MakeTop platform. Get results under 24H. Pay by crypto'
        />
        <meta
          name='og:description'
          content='Buy Twitter likes with simple steps and normal-looking gradual delivery. Top likes from #1 MakeTop platform. Get results under 24H. Pay by crypto'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content='Buy Twitter Likes - Normal Gradual Delivery - MakeTop'
        />
        <meta
          property=' title'
          content='Buy Twitter Likes - Normal Gradual Delivery - MakeTop'
        />
        <meta name='twitter:card' content='summary' />
        <meta
          name='twitter:description'
          content='Buy Twitter   likes from MakeTop. Instant delivery, real auto likes and friendly 24/7 customer support. Try us today.'
        />
        <meta
          name='twitter:description'
          content='Buy Twitter  likes from MakeTop. Instant delivery, real  likes and friendly 24/7 customer support. Try us today.'
        />
        <meta
          name='twitter:title'
          content="Buy Twitter   Likes From The world's #1 Site (2022)- maketop"
        />
        <meta
          name='twitter:title'
          content="Buy Twitter Likes From The world's #1 Site (2022)- maketop"
        />
        <meta
          property='og:url'
          content='https://maketop.io/buy-twitter-likes'
        />
        <link rel='canonical' href='https://maketop.io/buy-twitter-likes' />
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
          <Layer type='twitter'>
            <div className={`container`}>
              <PageTitle title={'Buy Twitter followers '} />
              <div className={styles.phone2}>
                <div className={buyLikesStyles.secondTitle}>
                  <p className={buyLikesStyles.title}>TWITTER LIKES</p>
                  <p className={buyLikesStyles.text}>
                    Where you can buy cheap likes for Instagram photos and
                    videos. Buy real Insta likes for the
                    <br />
                    most reasonable prices here and grow your Instagram
                    popularity in a flash!
                  </p>
                  <ButtonComponent
                    text={'Leave Feedback'}
                    type={'twitter'}
                    onClick={() => router.push('/')}
                  />
                </div>
                <img
                  src='/twitterPhoto1.png'
                  alt='buy twitter likes'
                  className={styles.twitterImg1}
                />
                <img
                  src='/twitterPhoto2.png'
                  alt='buy twitter likes cheap'
                  className={styles.twitterImg2}
                />
              </div>

              <div className={`container ${buyLikesStyles.getStartedTitle}`}>
                <p>GET STARTED</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <div className={youtubeStyles.buyLikes_item_container}>
                  {additionalPrice?.map((item, index) => (
                    <BuyLikes
                      key={item[0]}
                      likes={item[0]}
                      newPrice={item[1]}
                      text='Real Twitter Likes'
                      type={'twitter'}
                      id={'TWITTERLIKES'}
                      onClick={() => {
                        router.push({
                          pathname: '/buy-twitter-likes',
                          query: {
                            service: 'Likes',
                            counts: item[0],
                            system: 'Twitter',
                            priceValue: item[1],
                          },
                        });
                        setIsOpen(true);
                      }}
                    />
                  ))}
                </div>
              </div>
              <p className={buyLikesStyles.reviewsTitle}>REVIEWS</p>
              <div className={buyLikesStyles.reviews_container}>
                {comment && (
                  <ReviewsGenerator type='twitter' comment={comment} />
                )}
                <OwnComment type='twitter' service='Likes' />
                {isReviewButtonPress && (
                  <ModalReview
                    open={isReviewButtonPress}
                    setOpen={setIsReviewButtonPress}
                    type='twitter'
                    service='Likes'
                  />
                )}
                <span className={buyLikesStyles.ownHiddenButton}>
                  <ButtonComponent
                    text={'Leave comment'}
                    type={'twitter'}
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
                  style={{ color: '#02C6F8', textDecoration: 'underline' }}
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

export default BuyTwitterLikes;
