/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import blogStyles from '../styles/Blog.module.sass';

const PublishHead = () => {
  return (
    <div className={blogStyles.publishedBlock}>
      <span>
        <p>Published: Maddy Osman</p>
        <img src='/publishLine.svg' />
        <p>1 year ago</p>
      </span>
      <div className={blogStyles.published_links}>
        <p>Share post:</p>
        <a href='https://www.tiktok.com'>
          <img src='/tiktokLogo.svg' />
        </a>
        <a href='https://twitter.com'>
          <img src='/twitterLogo.svg' />
        </a>
        <a href='https://www.instagram.com'>
          <img src='/instagramLogo.svg' />
        </a>
        <a href='https://www.youtube.com'>
          <img src='/youtubeLogo.svg' />
        </a>
        <a href='https://web.telegram.org'>
          <img src='/telegramLogo.svg' />
        </a>
        <a href='https://www.facebook.com'>
          <img src='/facebookLogo.svg' />
        </a>
      </div>
    </div>
  );
};

export default PublishHead;
