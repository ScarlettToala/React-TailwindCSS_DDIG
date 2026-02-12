import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Footer({ logo }) {
  const [loading, setLoading] = useState(true);

  // Variables de clase para evitar repetir código
  const linkClass = "relative text-[#0C0808] font-[Open_Sans] text-lg after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full transition";

  // Cargar la imagen del logo
  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.onload = () => setLoading(false);
  }, [logo]);

  if (loading) {
    return (
      <footer className="w-full bg-[#F480AD] text-black py-8 px-4 flex justify-center items-center">
        <p className="text-lg font-bold">Cargando footer...</p>
      </footer>
    );
  }

  return (
    <footer className=" bg-[#F480AD] text-black py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

        {/* Navegación */}
        <nav
          className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left gap-4 md:gap-0 text-lg font-[Open_Sans]"
          aria-label="Enlaces del pie de página"
        >
          <Link to="/sobrenosotros" className={linkClass}>Sobre Nosotros</Link>
          <Link to="/productos" className={linkClass}>Productos</Link>
          <Link to="/servicios" className={linkClass}>Servicios</Link>
          <a href="#" className={linkClass}>Contacto</a>
        </nav>

        {/* Logo */}
        <div className="flex justify-center md:justify-center items-center bg-white rounded-full shadow-lg p-4 md:p-5 w-24 h-24 md:w-28 md:h-28 hover:scale-105 transition-transform duration-300">
          <img src={logo} alt="Logo Corporativo de Silpaza" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
        </div>

        {/* Información */}
        <div className="text-center md:text-right text-sm space-y-1">
          <p>&copy; Silpaza 2025</p>
          <p>Author: Scarlett Toala</p>
          <p>Última fecha: 13/10/2025</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
