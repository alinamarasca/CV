import "./sass/App.scss";
import ModalProvider from "./contexts/ModalContext/ModalContextProvider";
import About from "./components/About";
import Projects from "./components/Projects";
import Intro from "./components/Intro";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  return (
    <ModalProvider>
      <div className="wrapper">
        <Intro />
        <GeneralInfo />
        <About />
        <Projects />
      </div>
    </ModalProvider>
  );
}

export default App;
