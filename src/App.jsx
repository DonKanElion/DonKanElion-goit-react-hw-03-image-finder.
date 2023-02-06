import React, { Component } from 'react';
import imagesBase from '../src/testBase.json';

import Searchbar from './components/Searchbar';

// import imagesApi from './services/imagesApi';

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
    // isLoading: false,
    // error: null,
  };

  onSubmit = searchValue => {
    console.log('Виклик getValue в App');
    this.setState({
      searchValue,
    });
  };

  componentDidUpdate(_, prevState) {
    const { searchValue, page } = this.state;

    console.log('componentDidUpdate');

    if(prevState.searchValue !== this.state.searchValue){
      this.getImages(searchValue, page)
    }

  }

  getImages = (searchValue, page) => {
    fetch(
      `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=31409515-1e05b025820d8f08d6d70aee0&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(images => {
        console.log('останній then: ', images.hits);

        return this.setState({
          images: images.hits,
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        {/* <ImageGallery images={imagesBase.hits}></ImageGallery> */}
        <ImageGallery images={this.state.images}></ImageGallery>

        <Loader></Loader>
        <Button></Button>
        {/* <Modal></Modal> */}
      </div>
    );
  }
}
