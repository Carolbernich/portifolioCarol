import React from "react";
import "../styles/Section.scss";

const Resume = () => (
  <section id="resume" className="section resume">
    <h2>Currículo</h2>
    <p>
       Atuei como Desenvolvedora Unity na Simula Health (2024 – atual), desenvolvendo aplicações em realidade virtual para a área da saúde, com foco em simulações interativas e usabilidade. Anteriormente, trabalhei como Desenvolvedora Front-end na Digital Business (2022 – 2024). Possuo perfil proativo, aprendizado rápido e interesse em integrar inovação e experiência do usuário em projetos digitais.
    </p>
     <a href={process.env.PUBLIC_URL +"/CVCarolportugues2025.pdf"} target="_blank" rel="noopener noreferrer" >
      <button >Baixar Currículo</button>
    </a>
  </section>
);

export default Resume;
