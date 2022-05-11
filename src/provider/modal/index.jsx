import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext([]);

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalButtons, setModalButtons] = useState([]);
  const [closeButton, setCloseButton] = useState(true)


  const modalReset = () => {
    setShow(false)
    setModalTitle("");
    setModalContent("");
    setModalButtons([]);
    setCloseButton(true)
  };

  const openModal = (title, content, buttons, closeButton=true) => {
    setShow(true)
    setModalTitle(title);
    setModalContent(content);
    setModalButtons(buttons);
    if (!closeButton){
      setCloseButton(false)
    }
  }

  return (
    <ModalContext.Provider
      value={{
        show,
        setShow,
        modalReset,
        modalTitle,
        modalContent,
        modalButtons,
        openModal,
        closeButton
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
