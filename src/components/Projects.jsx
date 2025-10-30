import React from "react";
import "../styles/App.scss";

const Projects = () => (
  <section id="projects" className="section projects">
    <h2>Projetos</h2>
    <div className="project-list">
      <a href={process.env.PUBLIC_URL +"/tcc2_caroline_bernich.pdf"} target="_blank" rel="noopener noreferrer" >
        <div className="project-card">
        
          <img src={process.env.PUBLIC_URL +"/museutcc.png"} alt="Museu de Anatomia" />
          <h3>Museu de Anatomia (TCC)</h3>
          <p>Aplicação de Realidade Aumentada para ensino de Anatomia Humana, com modelos 3D interativos.</p>
        </div>
      </a>

     
        <a href="https://simulahealth.com.br/" target="_blank" rel="noopener noreferrer" >
          <div className="project-card">
            <img src={process.env.PUBLIC_URL +"/simula.png"} alt="Simula Health" />
            <h3>Simula Health</h3>
            <p>Simulações 3D e em realidade virtual para ensino de enfermagem, com foco em interatividade.</p>
          </div>
        </a>

      <a href="https://www.safra.com/" target="_blank" rel="noopener noreferrer" >
        <div className="project-card" >
          <img src={process.env.PUBLIC_URL +"/banco_safra.png"} alt="Digital Business / Banco Safra NY" />
          <h3>Digital Business / Banco Safra NY</h3>
          <p>Reformulação de site institucional durante estágio, contribuindo com melhorias visuais e front-end.</p>
        </div>
      </a>

      <a href="https://biocodejr.com.br/" target="_blank" rel="noopener noreferrer"  >
        <div className="project-card">
          <img src={process.env.PUBLIC_URL +"/logo_biocodejr.svg"} alt="Biocode jr" id="biocode" />
          <h3>BioCode jr</h3>
          <p>Construção de site da empresa júnior de Informática Biomédica da UFCSPA</p>
        </div>
      </a>
    </div>
  </section>
);

export default Projects;
