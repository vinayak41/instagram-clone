import React from "react";
import "./modal.scss";
import { CgClose } from "react-icons/cg";
import { useEffect } from "react";

const Modal = ({ isOpen, handleClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <>
      {isOpen ? (
        <div className="modal-container">
          <button className="close-button" onClick={handleClose}>
            <CgClose size={33} />
          </button>
          <div className="modal-containt">{children}</div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
