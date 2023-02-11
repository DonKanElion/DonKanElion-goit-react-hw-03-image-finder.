import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  static propTypes = {
    webImg: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    window.addEventListener('keydown', this.handleKeyDown);
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleClick = () => {
    const { isModalOpen } = this.state;
    if (!isModalOpen) {
      this.openModal();
    }
  };

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.closeModal();
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  };

  handleBackDropClick = evt => {
    console.log('Click BackDrop');
    if (evt.currentTarget === evt.target) {
      this.closeModal();
    }
  };

  render() {
    const { webImg, alt, largeImageURL } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <li className="ImageGalleryItem" onClick={this.handleClick}>
          <img src={webImg} alt={alt} className="ImageGalleryItem-image" />
        </li>
        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            onClick={this.handleBackDropClick}
          ></Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
