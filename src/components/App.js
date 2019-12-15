/*eslint-disable*/

import React, { Component } from 'react';
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';
import moment from 'moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeadTv from './HeadTv/HeadTv';
import Logo from './Logo/Logo';
import ListFilm from './ListFilm/ListFilm';
import styles from './App.module.css';
import GetImgList from '../services/services';

toast.configure({
  autoClose: 3500,
  draggable: false,
});

class App extends Component {
  state = {
    date: '',
    listCinema: '',
  };

  errorInput = infoError => {
    if (infoError === 'no server') {
      toast.error('Нету соединения с сервером ! Попробуйте в следующий раз', {
        position: toast.POSITION.TOP_LEFT,
      });
    }
    if (infoError === 'no films') {
      toast.info('Фльмов на эту дату не найдено! Попробуйте другую дату', {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  changeDate = day => {
    const dataFormat = moment(day).format('YYYY-MM-DD');
    this.setState(
      {
        date: dataFormat,
      },
      () => this.addFilmsTolist(this.state.date),
    );
  };

  addFilmsTolist = date => {
    GetImgList(date)
      .then(({ data }) => {
        if (data.length > 0) {
          this.setState({
            listCinema: data,
          });
        } else {
          this.errorInput('no films');
        }
      })
      .catch(() => this.errorInput('no server'));
  };

  render() {
    const { changeDate } = this;
    const { listCinema } = this.state;
    return (
      <>
        <Logo />
        {!listCinema ? (
          <>
            <HeadTv />
            <div className={styles.dataPicker}>
              <DayPicker onDayClick={day => changeDate(day)} />
            </div>
          </>
        ) : (
          <ListFilm listCinema={listCinema}></ListFilm>
        )}
      </>
    );
  }
}

export default App;
