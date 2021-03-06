import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Intro from "./components/Intro";
import GeneralInfo from "./components/GeneralInfo";
import Modal from "./components/shared/Modal";
import ModalContext from "./contexts/ModalContext";
import MessageForm from "./components/shared/MessageForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    console.log("close modal");
    setIsOpen(false);
  };
  const openModal = () => {
    console.log("open modal");
    setIsOpen(true);
  };

  const modalControl = {
    modal: isOpen,
    closeModal,
    openModal
  };

  return (
    <>
      <ModalContext.Provider value={modalControl}>
        <div className="wrapper">
          <Routes>
            <Route
              exact
              path="/CV"
              element={
                <>
                  <Intro />
                  <GeneralInfo />
                  <About />
                  <Projects />
                  <Modal open={isOpen} children={MessageForm()} />
                </>
              }
            ></Route>
            <Route path="/cv" element={<Navigate to="/CV" />} />
          </Routes>
        </div>
      </ModalContext.Provider>
    </>
  );
}

export default App;
