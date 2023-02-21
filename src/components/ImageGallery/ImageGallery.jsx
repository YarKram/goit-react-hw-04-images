import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { useState, useEffect } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { fetchPictures } from 'api/picturesApi';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

const ImageGallery = ({ loadMore, page, search }) => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (search === '' && page === 1) {
      return;
    }

    setStatus('pending');
    fetchPictures(page, search)
      .then(res => {
        setImages(prevState => {
          if (search !== '' && page !== 1) {
            return [...prevState, ...res.data.hits];
          }
          return [...res.data.hits];
        });
        setStatus('resolved');
        console.log(res.data.hits);
      })
      .catch(error => console.log(error));
  }, [search, page]);

  return (
    <>
      {images.length > 0 && (
        <ImageGalleryList>
          {images.map(image => {
            return <ImageGalleryItem key={image.id} data={image} />;
          })}
        </ImageGalleryList>
      )}

      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <Button
          loadMore={() => {
            loadMore();
          }}
        />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  search: PropTypes.string.isRequired,
};

export default ImageGallery;
