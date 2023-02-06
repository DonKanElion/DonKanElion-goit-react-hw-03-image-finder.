import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webImg, alt }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={webImg} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webImg: PropTypes.string.isRequired,
  // largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
