import React from 'react';
import styles from './Logo.module.css';
import logoImg from '../../assets/images/SuperFilm.png';

const Logo = () => {
  return (
    <>
      <div className={styles.logoBg}>
        <img className={styles.logoimg} src={logoImg} alt="Super Film" />
      </div>
    </>
  );
};

export default Logo;
