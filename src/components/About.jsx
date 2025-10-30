import React from "react";
import "../styles/Section.scss";

const About = () => (
  <section id="about" className="section-about">
    <h2>Sobre mim</h2>
    <p>
      Sou graduada em Informática Biomédica pela Universidade Federal de Ciências da Saúde de Porto Alegre - UFCSPA, com experiência em desenvolvimento front-end (React)
      e em aplicações imersivas (Unity e VR). Tenho interesse em unir tecnologia e saúde, criando soluções
      acessíveis e intuitivas que ampliem o aprendizado e a interação digital.
    </p>
    <div className="skills">
      <span>React</span>
      <span>JavaScript</span>
      <span>Sass</span>
      <span>Bootstrap</span>
      <span>Unity</span>
      <span>C#</span>
    </div>
    
  </section>
  
);

export default About;
