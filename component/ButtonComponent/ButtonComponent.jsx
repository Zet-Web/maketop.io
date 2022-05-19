import React from 'react';
import styles from './ButtonComponent.module.sass';

export const ButtonComponent = ({
  text,
  onClick,
  type,
  style,
  typeInput,
  disabled,
  id,
}) => {
  return (
    <button
      id={id}
      disabled={disabled}
      onClick={onClick}
      type={typeInput}
      className={`${styles.main} ${type === 'title' ? styles.title : ''} ${
        type === 'outline' ? styles.outline : ''
      } ${type === 'youtube' ? styles.youtube : ''} ${
        type === 'instagram' ? styles.instagram : ''
      } ${type === 'twitter' ? styles.twitter : ''} ${
        type === 'tiktok' ? styles.tiktok : ''
      } ${type === 'facebook' ? styles.facebook : ''} ${
        type === 'spotify' ? styles.spotify : ''
      } ${type === 'vk' ? styles.vk : ''}`}
      style={style}
    >
      {text}
    </button>
  );
};
