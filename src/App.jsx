import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <>
      <NavMenu />
      <div id="home">
        <Main />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
