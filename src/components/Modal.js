import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, onClose, open }) =>
  open ?
    createPortal(
      <div className='modal'>
        <button onClick={onClose} className='modal__close'>&times;</button>
        {children}
      </div>,
      document.body)
    : null

export default Modal;
