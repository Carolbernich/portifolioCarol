import React, { useState } from "react";
import "../styles/App.scss";

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Museu de Anatomia (TCC)",
      img: process.env.PUBLIC_URL + "/museuTcc.png",
      resumo: "Aplicação de Realidade Aumentada para ensino de Anatomia Humana, com modelos 3D interativos.",
      detalhes: "Desenvolvimento de um aplicativo 3D interativo usando AR, com modelos escaneados e interação por toque. Fiquei responsável pelo desenvolvimento, modelagem, testes e usabilidade.",
      equipe: "Projeto individual + apoio dos professores do laboratório de anatomia.",
      link: process.env.PUBLIC_URL + "/tcc2_caroline_bernich.pdf",
      //imagensExtra: [
        //process.env.PUBLIC_URL + "/museu_extra1.png",
       // process.env.PUBLIC_URL + "/museu_extra2.png"
     // ]
    },
    {
      id: 2,
      title: "Simula Health",
      img: process.env.PUBLIC_URL + "/simula.png",
      resumo: "Simulações 3D e VR para ensino de enfermagem, com foco em interatividade.",
      detalhes: "Atuação no desenvolvimento de simulações clínicas em 3D, animações e interações VR/PC.",
      equipe: "Trabalhei com designers, enfermeiros e desenvolvedores Unity.",
      link: "https://simulahealth.com.br/"
    },
    {
      id: 3,
      title: "Digital Business / Banco Safra NY",
      img: process.env.PUBLIC_URL + "/banco_safra.png",
      resumo: "Reformulação de site institucional contribuindo com melhorias visuais e front-end.",
      detalhes: "Atuei com React, Next.js e UI/UX para reformular o site institucional do Banco Safra (NY).",
      equipe: "Trabalhei com equipe sênior de front-end e product designers.",
      link: "https://www.safra.com/"
    },
    {
      id: 4,
      title: "BioCode jr",
      img: process.env.PUBLIC_URL + "/logo_biocodejr.svg",
      resumo: "Construção do site da empresa júnior de Informática Biomédica da UFCSPA.",
      detalhes: "Desenvolvi o site oficial da empresa júnior, identidade visual e comunicação.",
      equipe: "Equipe de tecnologia e marketing da BioCode Jr.",
      link: "https://biocodejr.com.br/"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <h2>Projetos</h2>

      <div className="project-list">
        {projects.map(proj => (
          <div
            key={proj.id}
            className={`project-card ${proj.id === 4 ? "biocode-bg" : ""}`}
            onClick={() => setSelectedProject(proj)}
          >
            <img src={proj.img} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.resumo}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className={`modal-box ${selectedProject.id === 4 ? "biocode-modal" : ""}`} onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>X</button>

            <h2>{selectedProject.title}</h2>

            <img className="modal-main-img" src={selectedProject.img} alt="" />

            <p><strong>Detalhes:</strong> {selectedProject.detalhes}</p>
            <p><strong>Equipe:</strong> {selectedProject.equipe}</p>

            {selectedProject.link && (
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link">
                Ver projeto
              </a>
            )}

            {selectedProject.imagensExtra && (
              <div className="extra-images">
                {selectedProject.imagensExtra.map((img, index) => (
                  <img key={index} src={img} alt="extra" />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
