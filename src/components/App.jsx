import React, { Component } from 'react';

import Searchbar from './Searchbar';
// import ImageGallery from './ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem';
// import Loader from './Loader';
// import Button from './Button';
// import Modal from './Modal';

export class App extends Component {
  state = {
    status: [],
  };

  handleSubmit = (evt) => {
    const {value} = evt.target;

    console.log('Sumbmit', value);
  };

  handleClick = (evt) => {
    const {value} = evt.target;

    console.log('Hello Click', value)
  }

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          // display: 'block',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        😈 React homework template ♻️
        <Searchbar onSubmit={this.handleSubmit} onClick={this.handleClick} >Hello</Searchbar>
        {/* <ImageGallery></ImageGallery>
        <ImageGalleryItem></ImageGalleryItem>
        <Loader></Loader>
        <Button> </Button>
        <Modal></Modal> */}
      </div>
    );
  }
}
