import "./styles.css";
import { Component } from "react";
// Use Hero, Skills and About component to display your information
import Hero from "./Hero.js";
import Skills from "./Skills.js";
import About from "./About.js";
class App extends Component {
  render() {
    return(
      <div className="App">
        <Hero />
        <Skills/>
        <About/>
      </div>
    );
  }
}
export default App;
