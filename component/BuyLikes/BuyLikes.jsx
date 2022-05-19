/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './BuyLikes.module.sass';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import { colors } from '../../colors/colors';

const BuyLikes = ({ likes, newPrice, text, type, onClick, id }) => {
  return (
    <div className={styles.buyLikes_item}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          className={styles.item_arrowButtons}
          style={colors[type].arrowButtonsColor}
        >
          <img src='/leftArrow.svg' />
        </div>
        <p className={styles.title} style={colors[type].likesColor}>
          {likes}
        </p>
        <div
          className={styles.item_arrowButtons}
          style={colors[type].arrowButtonsColor}
        >
          <img src='/rightArrow.svg' />
        </div>
      </div>
      <p className={styles.text}>{text}</p>

      <div className={styles.itemBody}>
        <div style={{ display: 'flex', gap: 3 }}>
          Delivery<p style={colors[type].timeColor}>Time 5-15 min</p>
        </div>
        <span>No Password Required</span>
        <p>Real Likes For Cheap</p>
      </div>
      <div className={styles.itemPrice}>
        <p className={styles.oldPrice}>$3.49</p>
        <p className={styles.newPrice} style={colors[type].priceColor}>
          ${newPrice}
        </p>
      </div>
      <ButtonComponent
        text={'Buy'}
        type={type}
        id={`${id}${likes}`}
        style={{ width: '100%' }}
        onClick={onClick}
      />
    </div>
  );
};

export default BuyLikes;
