import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ display, children }) => {
  if (display) {
    return ReactDOM.createPortal(
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
        <div className="bg-[#00181fcb] w-full h-screen p-20">{children}</div>
      </div>,
      document.querySelector('#modal-root')
    );
  }
  return null;
};

export default Modal;
