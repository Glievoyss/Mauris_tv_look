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
import Modal from './Modal/Modal';

toast.configure({
  autoClose: 3500,
  draggable: false,
});

class App extends Component {
  state = {
    date: '',
    listCinema: '',
    isModalOpen: false,
    bigImg: '',
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

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  changeImgOriginal = e => {
    const valueImgLink = e.currentTarget.dataset.bigimg;
    this.openModal();
    this.setState({ bigImg: valueImgLink });
  };

  render() {
    const { changeDate } = this;
    const { listCinema, date, isModalOpen, bigImg } = this.state;
    return (
      <>
        {listCinema && (
          <button
            className={styles.backButton}
            type="button"
            onClick={() =>
              this.setState({
                date: '',
                listCinema: '',
              })
            }
          />
        )}
        <Logo />
        {!listCinema ? (
          <>
            <HeadTv />
            <div className={styles.dataPicker}>
              <DayPicker onDayClick={day => changeDate(day)} />
            </div>
          </>
        ) : (
          <ListFilm
            listCinema={listCinema}
            date={date}
            changeImgOriginal={this.changeImgOriginal}
          />
        )}
        {isModalOpen && <Modal closeModal={this.closeModal} bigImg={bigImg} />}
      </>
    );
  }
}

export default App;
