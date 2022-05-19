/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './Header.module.sass';

import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

export const Header = ({ type }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={`${styles.container} ${
        openMenu ? styles.container_active : ''
      }`}
    >
      <div className={styles.menu}>
        <Link href={'/'}>
          <a>
            <div className={styles.logoContainer}>
              <img src='/123.gif' alt='maketop.io' width={'100%'} />
              <p className={styles.make}>MAKE</p>
              <p className={styles.top}>TOP</p>
            </div>
          </a>
        </Link>
        <button
          className={styles.burger_menu}
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {!openMenu ? (
            <img src='/menu.svg' alt='' />
          ) : (
            <img src='/close.svg' alt='' />
          )}
        </button>
      </div>

      <Link href={'/buy-instagram-likes'}>
        <a
          className={` ${styles.link} ${
            type === 'youtube'
              ? styles.youtube_link
              : type === 'twitter'
              ? styles.twitter_link
              : type === 'facebook'
              ? styles.facebook_link
              : type === 'spotify'
              ? styles.spotify_link
              : type === 'vk'
              ? styles.vk_link
              : type === 'tiktok'
              ? styles.tiktok_link
              : styles.instagram_link
          }`}
        >
          Buy Instagram Likes
        </a>
      </Link>
      <Link href={'/buy-instagram-followers'}>
        <a
          className={` ${styles.link} ${
            type === 'youtube'
              ? styles.youtube_link
              : type === 'twitter'
              ? styles.twitter_link
              : type === 'facebook'
              ? styles.facebook_link
              : type === 'spotify'
              ? styles.spotify_link
              : type === 'vk'
              ? styles.vk_link
              : type === 'tiktok'
              ? styles.tiktok_link
              : styles.instagram_link
          }`}
        >
          Buy Instagram Followers
        </a>
      </Link>
      <div className={styles.link}>
        <p style={{ height: 70, display: 'flex', alignItems: 'center' }}>
          Premium Services
          <ExpandMore />
        </p>
        <div className={styles.hoverBlock}>
          <div>
            <Link href={'/buy-instagram-likes'}>
              <a>Buy Instagram Likes</a>
            </Link>
            <Link href={'/automatic-instagram-likes'}>
              <a> Automatic Instagram Likes</a>
            </Link>
            <Link href={'/buy-instagram-followers'}>
              <a>Buy Instagram Followers</a>
            </Link>
            <Link href={'/buy-instagram-views'}>
              <a>Buy Instagram Views</a>
            </Link>
            <Link href={'/buy-instagram-comments'}>
              <a>Buy Instagram Сomments</a>
            </Link>
            <Link href={'/free-instagram-likes'}>
              <a>Free Instagram Likes</a>
            </Link>
            <Link href={'/free-instagram-followers'}>
              <a style={{ marginBottom: 50 }}> Free Instagram Followers</a>
            </Link>
            <Link href={'/buy-youtube-views'}>
              <a>YouTube Views</a>
            </Link>
            <Link href={'/buy-youtube-likes'}>
              <a>YouTube Likes</a>
            </Link>
            <Link href={'/buy-youtube-comments'}>
              <a>YouTube Comments</a>
            </Link>
          </div>
          <div>
            <Link href={'/buy-tiktok-followers'}>
              <a>TikTok Followers</a>
            </Link>
            <Link href={'/buy-tiktok-likes'}>
              <a> TikTok Likes</a>
            </Link>
            <Link href={'/buy-tiktok-views'}>
              <a style={{ marginBottom: 50 }}>TikTok Views</a>
            </Link>
            <Link href={'/buy-twitter-followers'}>
              <a>Twitter Followers</a>
            </Link>
            <Link href={'/buy-twitter-likes'}>
              <a>Twitter Likes</a>
            </Link>
          </div>
          <div>
            <Link href={'/buy-facebook-page-likes'}>
              <a style={{ marginBottom: 50 }}>Facebook Page Likes</a>
            </Link>
            <Link href={'/buy-spotify-playlist-followers'}>
              <a style={{ marginBottom: 50 }}>Spotify Playlist Followers</a>
            </Link>
            <Link href={'/buy-vk-group-followers'}>
              <a>VK Group followers</a>
            </Link>
            <Link href={'/buy-vk-post-likes'}>
              <a>VK Post likes</a>
            </Link>
          </div>
        </div>
      </div>
      <Link href={'/support'}>
        <a
          className={` ${styles.link} ${
            type === 'youtube'
              ? styles.youtube_link
              : type === 'twitter'
              ? styles.twitter_link
              : type === 'facebook'
              ? styles.facebook_link
              : type === 'spotify'
              ? styles.spotify_link
              : type === 'vk'
              ? styles.vk_link
              : type === 'tiktok'
              ? styles.tiktok_link
              : styles.instagram_link
          }`}
        >
          Contact
        </a>
      </Link>

      <div className={`${styles.menu_open} ${openMenu && styles.active}`}>
        <Link href={'/buy-instagram-likes'}>
          <a className={styles.mobile_span}>Buy Instagram Likes</a>
        </Link>
        <Link href={'/buy-instagram-followers'}>
          <a className={styles.mobile_span}>Buy Instagram Followers</a>
        </Link>
        <div className={styles.mobile_span}>
          <Accordion
            style={{
              background: 'transparent',
              border: 0,
              boxShadow: 'none',
              maxWidth: 250,
              width: '100%',
            }}
            TransitionProps={{ timeout: 500 }}
          >
            <AccordionSummary
              aria-controls='panel1a-content'
              id='panel1a-header'
              style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                top: -10,
              }}
              expandIcon={<ExpandMore style={{ color: 'white' }} />}
            >
              <p className={styles.mobile_span}> Premium Services</p>
            </AccordionSummary>
            <AccordionDetails className={styles.accordion}>
              <Link href={'/buy-instagram-likes'}>
                <a>Buy Instagram Likes</a>
              </Link>
              <Link href={'/automatic-instagram-likes'}>
                <a> Automatic Instagram Likes</a>
              </Link>
              <Link href={'/buy-instagram-followers'}>
                <a>Buy Instagram Followers</a>
              </Link>
              <Link href={'/buy-instagram-views'}>
                <a>Buy Instagram Views</a>
              </Link>
              <Link href={'/buy-instagram-comments'}>
                <a>Buy Instagram Сomments</a>
              </Link>
              <Link href={'/free-instagram-likes'}>
                <a>Free Instagram Likes</a>
              </Link>
              <Link href={'/free-instagram-followers'}>
                <a style={{ marginBottom: 50 }}> Free Instagram Followers</a>
              </Link>
              <Link href={'/buy-youtube-views'}>
                <a>YouTube Views</a>
              </Link>
              <Link href={'/buy-youtube-likes'}>
                <a>YouTube Likes</a>
              </Link>
              <Link href={'/buy-youtube-comments'}>
                <a>YouTube Comments</a>
              </Link>
              <Link href={'/buy-tiktok-followers'}>
                <a>TikTok Followers</a>
              </Link>
              <Link href={'/buy-tiktok-likes'}>
                <a> TikTok Likes</a>
              </Link>
              <Link href={'/buy-tiktok-views'}>
                <a style={{ marginBottom: 50 }}>TikTok Views</a>
              </Link>
              <Link href={'/buy-twitter-followers'}>
                <a>Twitter Followers</a>
              </Link>
              <Link href={'/buy-twitter-likes'}>
                <a>Twitter Likes</a>
              </Link>
              <Link href={'/buy-facebook-page-likes'}>
                <a style={{ marginBottom: 50 }}>Facebook Page Likes</a>
              </Link>
              <Link href={'/buy-spotify-playlist-followers'}>
                <a style={{ marginBottom: 50 }}>Spotify Playlist Followers</a>
              </Link>
              <Link href={'/buy-vk-group-followers'}>
                <a>VK Group followers</a>
              </Link>
              <Link href={'/buy-vk-post-likes'}>
                <a>VK Post likes</a>
              </Link>
            </AccordionDetails>
          </Accordion>
        </div>
        <Link href={'/support'}>
          <a className={styles.mobile_span}>Contact</a>
        </Link>
      </div>
    </div>
  );
};
