import PropTypes from 'prop-types';

const ImageGalleryItem = (webformatURL, largeImageURL, tags) => {
  console.log(' Hello ImageGalleryItem');

  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} id={largeImageURL} className="ImageGalleryItem-image"/>
    </li>
  );
};

ImageGalleryItem.propTypes = { 
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}


export default ImageGalleryItem;
