import React from 'react';
import styles from './NewHeader.module.sass';
import CONSTANTS from '../../constants';

function NewHeader () {
  return (
    <div className={styles.headerContainer}>
      <a href='/'>
        <img
          src={`${CONSTANTS.STATIC_IMAGES_PATH}/logo-white.svg`}
          alt='Squad Help'
        />
      </a>
      <div>
        <input type='text' placeholder='Search over 100,000 names' />
        <button style={{ border: 'none', background: '#fff' }}></button>
      </div>
      <ul className={styles.userMenu}>
        <li>Account</li>
        <li>Quick Links</li>
        <li>Contact</li>
        <li>Favorites</li>
      </ul>
    </div>
  );
}

export default NewHeader;
