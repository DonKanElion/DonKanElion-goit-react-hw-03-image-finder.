import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchImages } from './services/imagesApi';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
// import ScrollUp from './components/ScrollUp';

export class App extends Component {
  state = {
    // status: [],
    page: 1,
    searchValue: '',
    images: [],
    isLoading: false,
    error: null,
    total: '',
  };

  onSubmit = value => {
    const { searchValue } = this.state;

    if (value !== searchValue) {
      this.setState({
        searchValue: value,
        page: 1,
      });
    }
  };

  handleClick() {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
    console.log(this.state.page);
  }

  async componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;

    if (prevState.searchValue !== searchValue) {
      this.setState({ isLoading: true });

      try {
        const response = await fetchImages(searchValue, page);

        if (response.total === 0) {
          this.notifyWarning(
            'Sorry, nothing was found for your request, try something else.'
          );
        }

        this.setState({ images: response.hits, total: response.total });
      } catch (error) {
        this.notifyError();
        return console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (prevState.page !== page) {
      try {
        const response = await fetchImages(searchValue, page);
        const newPage = response.hits;

        this.setState(prevState => ({
          images: [...prevState.images, ...newPage],
        }));
      } catch (error) {
        this.notifyError('Oops, something went wrong, please try again.');
        return console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  notifyWarning = text => {
    Notify.warning(`${text}`);
  }; // пустий рядок, нічого не знайдено

  notifyError = () => {
    Notify.error('Oops, something went wrong, please try again.');
  }; // Помилка

  render() {
    const { isLoading, total, page } = this.state;
    return (
      <div className="App">
        <Searchbar
          onSubmit={this.onSubmit}
          notifyWarning={this.notifyWarning}

          // isSubmitting={isLoading}
        ></Searchbar>

        {!isLoading ? (
          <ImageGallery images={this.state.images}></ImageGallery>
        ) : (
          <Loader></Loader>
        )}

        {total / 12 > page ? (
          <Button onClick={this.handleClick.bind(this)}></Button>
        ) : (
          ''
        )}

        {/* <ScrollUp></ScrollUp> */}
      </div>
    );
  }
}
