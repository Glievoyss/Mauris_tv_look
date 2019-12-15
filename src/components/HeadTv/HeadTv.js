import React from 'react';
import styles from './HeadTv.module.css';
import TvImg from '../../assets/images/tv.png';

const HeadTv = () => {
  return (
    <>
      <div className={styles.tvContainer}>
        <img className={styles.tvImg} src={TvImg} alt="TV bars" />
        <p className={styles.tvText}>
          Для получения списка сериалов, пожалуйста, выберите необходимый месяц
          и день.
        </p>
      </div>
    </>
  );
};

export default HeadTv;
