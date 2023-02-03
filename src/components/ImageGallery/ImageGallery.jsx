import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webImg={webformatURL}
            alt={tags}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
