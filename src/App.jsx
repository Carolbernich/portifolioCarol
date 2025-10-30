import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <div className="divisor" />
      <Projects />
        <div className="divisor" />
      <Resume />
        <div className="divisor" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
