import React from "react";
import "../styles/Section.scss";

const Contact = () => (
  <section id="contact" className="section contact">
    <h2>Contato</h2>
    <p>Entre em contato para colaborações ou oportunidades profissionais:</p>
    <div className="contact-links">
      <a href="mailto:carolinebernich@gmail.com">📧 carolinebernich@gmail.com</a>
      <a href="https://www.linkedin.com/in/carolinebernich/" target="_blank" rel="noopener noreferrer">
        💼 LinkedIn
      </a>
      <a href="https://github.com/carolinebernich" target="_blank" rel="noopener noreferrer">
        💻 GitHub
      </a>
    </div>
  </section>
);

export default Contact;
