import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import '../styles/Footer.scss'; // <-- enlazamos el archivo Sass

function Footer({ logo }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.onload = () => setLoading(false);
  }, [logo]);

  if (loading) {
    return (
      <footer className="footer flex justify-center items-center">
        <p>Cargando footer...</p>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Navegación */}
        <nav className="footer-nav" aria-label="Enlaces del pie de página">
          <Link to="/sobrenosotros">Sobre Nosotros</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/servicios">Servicios</Link>
          <a href="#">Contacto</a>
        </nav>

        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo Corporativo de Silpaza" />
        </div>

        {/* Información + contacto */}
        <div className="footer-contact">
          <div className="icons">
            <a href="https://instagram.com/silpaza" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:silpaza@ejemplo.com"><FaEnvelope /></a>
            <a href="tel:+34652345678"><FaPhone /></a>
          </div>
          <p>&copy; Silpaza 2025</p>
          <p>Author: Scarlett Toala</p>
          <p>Última fecha: 13/10/2025</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;