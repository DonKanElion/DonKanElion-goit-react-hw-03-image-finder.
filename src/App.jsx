import React, { Component } from 'react';

import Searchbar from './components/Searchbar';

import { fetchImages } from './services/imagesApi';

import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
// import Modal from './Modal';

export class App extends Component {
  state = {
    // status: [],
    page: 1,
    searchValue: '',
    images: [],
    isLoading: false,
    error: null,
  };

  onSubmit = value => {
    const { searchValue } = this.state;
    console.log('Виклик getValue в App');

    if (value !== searchValue) {
      this.setState({
        searchValue: value,
        page: 1,
      });
    }
  };

  handleClick() {
    console.log('click!');
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });

    console.log(this.state.page);
  }

  async componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;
    this.setState({ isLoading: true });
    console.log('componentDidUpdate');

    if (prevState.searchValue !== this.state.searchValue) {
      console.log('Запит по searchValue на сервер ');

      try {
        const response = await fetchImages(searchValue, page);
        console.log('response: ', response);
        this.setState({ images: response.hits, isLoading: false });
      } catch (error) {
        return console.log(error);
      }
    }

    if (prevState.page !== this.state.page) {
      console.log('Запит по page на сервер');

      try {
        const response = await fetchImages(searchValue, page);
        console.log('2 response: ', response);

        const newPage = response.hits;

        this.setState(prevState => ({
          images: [...prevState.images, ...newPage],
          isLoading: false,
        }));
      } catch (error) {
        return console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit}></Searchbar>

        {isLoading ? (
          <ImageGallery images={this.state.images}></ImageGallery>
        ) : (
          <div>LOADING</div>
        )}

        <Loader></Loader>
        <Button onClick={this.handleClick.bind(this)}></Button>
        {/* <Modal></Modal> */}
      </div>
    );
  }
}
