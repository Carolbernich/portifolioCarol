import React from "react";
import "../styles/Header.scss";

const Header = () => {

  return (
    <header className="header">
      <div className="logo">Caroline Doberstein Ferreira Bernich</div>
      <nav>
       
        <ul>
         
     {/* Ícone do WhatsApp */}
      <a
        href={process.env.PUBLIC_URL +"https://wa.me/5551993399595"}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <img src={process.env.PUBLIC_URL +"/whatsapp.svg.webp"} alt="WhatsApp" />
      </a>
   
        </ul>
      </nav>
    </header>
  );
};

export default Header;
