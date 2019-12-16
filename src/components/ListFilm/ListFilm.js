/*eslint-disable*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListFilm.module.css';
import CardFilm from '../CardFilm/CardFilm';

const ListFilm = ({ listCinema, date, changeImgOriginal }) => {
  return (
    <>
      <h2 className={styles.dataList}>{date}</h2>
      <ul className={styles.filmList}>
        {listCinema.map(({ id, show, name, number, season, airdate }) => (
          <CardFilm
            key={id}
            show={show}
            name={name}
            number={number}
            season={season}
            airdate={airdate}
            changeImgOriginal={changeImgOriginal}
          />
        ))}
      </ul>
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

export default ListFilm;
