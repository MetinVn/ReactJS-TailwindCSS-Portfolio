import React from "react";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavMenu from "./components/NavMenu";
import Summary from "./components/Summary";
import Spaceship from "./components/Spaceship";

function App() {
  return (
    <div className="bg-custom-gradient">
      <NavMenu />
      <div id="home">
        <Main />
      </div>
      <div id="spaceship">
        <Spaceship />
      </div>
      <div id="summary">
        <Summary />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
