// import "./sass/App.scss";
import React from "react";
// import ModalProvider from "./contexts/ModalContext/ModalContextProvider";
import About from "./components/About";
import Projects from "./components/Projects";
import Intro from "./components/Intro";
import GeneralInfo from "./components/GeneralInfo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <ModalProvider> */}
      <Router>
        <div className="wrapper">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Intro />
                  <GeneralInfo />
                  <About />
                  <Projects />
                </>
              }
            ></Route>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
      {/* </ModalProvider> */}
    </>
  );
}

export default App;
