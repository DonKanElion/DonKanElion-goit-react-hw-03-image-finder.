import PropTypes from 'prop-types';

const Modal = ({ largeImageURL, alt, onClick }) => {

  return (
    <div className="overlay" onClick={onClick}>
      <div className="modal">
        <img src={largeImageURL} alt={alt} />

      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Modal;