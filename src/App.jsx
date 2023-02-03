import React, { Component } from 'react';
import images from '../src/testBase.json';

import Searchbar from './components/Searchbar';
// import { getImages } from '../js/apiService';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
// import Modal from './Modal';

export class App extends Component {
  state = {
    // status: [],
    searchValue: '',
  };

 
  onSubmit = searchValue => {
    console.log("Виклик getValue в App");
    this.setState({
      searchValue,
    });
  };

  // getImages = () => {
  //   fetch(
  //     `https://pixabay.com/api/?q=cat&page=1&key=31409515-1e05b025820d8f08d6d70aee0&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then(response => response.json())
  //     .then(images => console.log(images))
  //     .catch(error => console.log(error));
  // };


  render() {

    // images.hits.map(({ id, webformatURL, largeImageURL }) => {
    //   console.log(id, webformatURL, largeImageURL);
    // })


    return (
      <div className='App'
        style={{
          // height: '100vh',
          // display: 'block',

          // textAlign: 'center',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} >
        </Searchbar>
        <ImageGallery images={images.hits}></ImageGallery>
        <Loader></Loader>
        <Button></Button>
        {/* <Modal></Modal> */}
      </div>
    );
  }
}
