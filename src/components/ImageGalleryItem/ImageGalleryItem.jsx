import PropTypes from 'prop-types';

import { useState } from 'react';
import { ImageItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({ data: { webformatURL, largeImageURL, tags } }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ImageItem
        onClick={() => {
          setShowModal(true);
        }}
      >
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageItem>
      {showModal && (
        <Modal
          close={() => {
            setShowModal(false);
          }}
          image={largeImageURL}
          tags={tags}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
