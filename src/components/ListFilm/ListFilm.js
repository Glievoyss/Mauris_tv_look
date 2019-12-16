/*eslint-disable*/

import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './ListFilm.module.css';
import CardFilm from '../CardFilm/CardFilm';

class ListFilm extends Component {
  state = {
    listLenght: 2,
  };
  render() {
    const { listCinema, date, changeImgOriginal } = this.props;
    const { listLenght } = this.state;
    return (
      <>
        <h2 className={styles.dataList}>
          {moment(date).format('D MMMM YYYY')}
        </h2>
        <ul className={styles.filmList}>
          {listCinema.map(
            ({ id, show, name, number, season, airdate }, index) => (
              <>
                {index < listLenght && (
                  <CardFilm
                    key={id}
                    show={show}
                    name={name}
                    number={number}
                    season={season}
                    airdate={airdate}
                    changeImgOriginal={changeImgOriginal}
                  />
                )}
              </>
            ),
          )}
        </ul>
        {listLenght === 2 && listCinema.length > 2 && (
          <button className={styles.allListButton} type="button">
            Еще {listCinema.length - 2} сериалов
          </button>
        )}
      </>
    );
  }
}

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
