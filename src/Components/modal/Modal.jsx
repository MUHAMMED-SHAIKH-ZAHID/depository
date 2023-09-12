import React from 'react';
import '../modal/modal.css'

const Modal = ({ isOpen, handleClose, children }) => {
    const modalClass = isOpen ? "block" : "hidden";
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        handleClose();
      }
    };
  
    return (
      <>
        {isOpen && (
    <div className={`modal ${modalClass}`}>
          <div className="fixed inset-0 flex items-center justify-center z-[51]">
            <div className="modal-overlay" onClick={handleOverlayClick}></div>
            <div className="modal-container bg-white md:w-1/2 mx-auto rounded shadow-lg z-50">
              <div className="modal-content p-4">{children}</div>
              <button
                onClick={handleClose}
                className="modal-close absolute top-2 right-2 text-xl"
              >
                &times;
              </button>
            </div>
          </div>
          </div>
        )}
      </>
    );
  };
  

export default Modal;
