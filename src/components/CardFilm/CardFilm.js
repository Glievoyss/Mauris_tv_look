/*eslint-disable*/
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './CardFilm.module.css';
import notImage from '../../assets/images/notImage.jpg';

const CardFilm = ({ show, name, number, season, changeImgOriginal }) => {
  return (
    <>
      <li className={styles.filmCard}>
        {show.image === null ? (
          <img className={styles.filmImage} src={notImage} alt={name} />
        ) : (
          <img
            className={styles.filmImage}
            src={show.image.medium}
            alt={name}
            data-bigimg={show.image.original}
            onClick={changeImgOriginal}
          />
        )}
        <div className={styles.filmInfo}>
          <div>
            <h2 className={styles.filmName}>{name}</h2>
            <p className={styles.filmData}>
              {moment(show.premiered).format('YYYY')}
            </p>
          </div>
          <div className={styles.filmItem}>
            <span className={styles.filmSeason}>Сезон: {season}</span>
            <span className={styles.filmEpisod}>Епизод:{number}</span>
          </div>
        </div>
      </li>
    </>
  );
};

// PhotoCard.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   likes: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   comments: PropTypes.number.isRequired,
//   downloads: PropTypes.number.isRequired,
//   changeImgForModal: PropTypes.func.isRequired,
// };

export default CardFilm;
