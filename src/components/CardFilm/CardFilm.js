/*eslint-disable*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardFilm.module.css';
import notImage from '../../assets/images/notImage.jpg';

const CardFilm = ({ show, name, number, season }) => {
  return (
    <>
      <li>
        {show.image === null ? (
          <img src={notImage} alt={name} width="30px" />
        ) : (
          <img src={show.image.medium} alt={name} width="30px" />
        )}
        <div>
          <div>
            <h2>{name}</h2>
            <p> {show.premiered}</p>
          </div>
          <span>Сезон: {season}</span>
          <span>Епизод:{number}</span>
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
