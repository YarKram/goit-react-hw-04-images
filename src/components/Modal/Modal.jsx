import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

const Modal = ({ image, close, tags }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  });

  const closeByEsc = evt => {
    if (evt.code === 'Escape') {
      close();
    }
  };

  return (
    <Overlay
      onClick={evt => {
        if (evt.currentTarget === evt.target) {
          return close();
        }
        return;
      }}
    >
      <ModalWindow>
        <img src={image} alt={tags} />
      </ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;
