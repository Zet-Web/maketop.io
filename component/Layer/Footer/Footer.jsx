/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Footer.module.sass';

import { useRouter } from 'next/router';
import Link from 'next/link';

export const Footer = () => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img src='/123.gif' width={'100%'} />
          <p className={styles.make}>MAKE</p>
          <p className={styles.top}>TOP</p>
        </div>

        <div className={styles.rowColumnLinks}>
          <div className={styles.firstRowColumn}>
            <div className={styles.logoColumn}>
              <p>Map Sites</p>
              <div className={styles.logoLinksColumn}>
                <Link href={'/buy-instagram-likes'}>
                  <a>Buy Instagram Likes</a>
                </Link>
                <Link href={'/automatic-instagram-likes'}>
                  <a> Automatic Instagram Likes</a>
                </Link>
                <Link href={'/buy-instagram-followers'}>
                  <a> Buy Instagram Followers</a>
                </Link>
                <Link href={'/buy-instagram-views'}>
                  <a> Buy Instagram Views</a>
                </Link>
                <Link href={'/free-instagram-likes'}>
                  <a>Free Instagram Likes</a>
                </Link>
                <Link href={'/buy-instagram-comments'}>
                  <a> Buy Instagram Comments</a>
                </Link>
              </div>
            </div>
            <div className={styles.linksColumn}>
              <Link href={'/buy-youtube-likes'}>
                <a>Youtube Likes</a>
              </Link>
              <Link href={'/buy-youtube-views'}>
                <a>Youtube Views</a>
              </Link>
              <Link href={'/buy-youtube-comments'}>
                <a>Youtube Comments</a>
              </Link>
              <Link href={'/buy-spotify-playlist-followers'}>
                <a>Spotify Playlist Followers</a>
              </Link>
            </div>
          </div>
          <div className={styles.secondRowColumn}>
            <div className={styles.firstRowColumn}>
              <div className={styles.linksColumn}>
                <Link href={'/buy-tiktok-followers'}>
                  <a>TikTok Followers</a>
                </Link>
                <Link href={'/buy-tiktok-likes'}>
                  <a>TikTok Likes</a>
                </Link>
                <Link href={'/buy-tiktok-views'}>
                  <a>TikTok Views</a>
                </Link>
                <Link href={'/buy-facebook-page-likes'}>
                  <a>Facebook Pages Likes</a>
                </Link>
              </div>
            </div>

            <div
              className={styles.firstRowColumn}
              style={{ alignItems: 'flex-start' }}
            >
              <div className={styles.linksColumn}>
                <Link href={'/buy-twitter-followers'}>
                  <a>Twitter Followers</a>
                </Link>
                <Link href={'/buy-twitter-likes'}>
                  <a>Twitter Likes</a>
                </Link>
                <Link href={'/buy-vk-group-followers'}>
                  <a>VK Group followers</a>
                </Link>
                <Link href={'/buy-vk-post-likes'}>
                  <a>VK Post Likes</a>
                </Link>
              </div>
              <div className={styles.linksColumn}>
                <Link href={'/support'}>
                  <a>Contact</a>
                </Link>
                <Link href={'/blog'}>
                  <a>Blog</a>
                </Link>
                <Link href={'/privacy-policy'}>
                  <a>Privacy</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rights}>
        <p>Name company. © All Rights Reserved</p>
        <span>
          <img src='/mastercard.svg' />
          <img src='/visa.svg' />
          <img src='/maestro.svg' />
          <img src='/americanExpress.svg' />
          <img src='/discover.svg' />
        </span>
      </div>
    </div>
  );
};
