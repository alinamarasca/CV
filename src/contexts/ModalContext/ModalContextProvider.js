import { React, useState } from "react";
import Modal from "../../components/shared/Modal";
import ModalContext from "./ModalContext";

const ModalProvider = ({ children }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = modalConfig => {
    const { children } = modalConfig;
    setModalContent(modalConfig);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const valueModalProvider = {
    openModal,
    closeModal
  };

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {modalOpened && <Modal {...modalContent} />}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
