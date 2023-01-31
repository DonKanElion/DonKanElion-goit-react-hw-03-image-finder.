import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log('Hello from ImageGallery');

  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webImg={webformatURL}
            largeImg={largeImageURL}
            alt={tags}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
}

export default ImageGallery;
