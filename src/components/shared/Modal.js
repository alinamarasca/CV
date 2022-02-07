import React, { useContext } from "react";
import { BsX } from "react-icons/bs";
import ModalContext from "../../contexts/ModalContext";

function Modal({ open, children }) {
  const { closeModal } = useContext(ModalContext);
  if (!open) return null;
  return (
    <div
      className="backdrop"
      onClick={e => {
        closeModal();
      }}
    >
      <div className="modal" onClick={e => e.stopPropagation()}>
        <BsX
          className="close-modal"
          onClick={e => {
            closeModal();
          }}
        />
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
