import React from "react";
import "../styles/Section.scss";

const Hero = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Olá, eu sou <span>Caroline Bernich</span></h1>
        <p>Desenvolvedora Unity e Front-end focada em experiências digitais interativas.</p>
        <div className="hero-buttons">
          <button onClick={() => handleScroll("projects")}>Ver Projetos</button>
          <a href="/CV Carol portugues 2025.pdf" target="_blank" rel="noopener noreferrer">
            <button className="secondary">Baixar Currículo</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
